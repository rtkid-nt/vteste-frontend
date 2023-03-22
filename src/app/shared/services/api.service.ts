import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthResponse } from '../models/auth.response';
import { ITest } from '../models/test';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private readonly apiUrl: string = 'http://localhost:3000/';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  private token: string = localStorage.getItem('token') || '';

  private setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
    this.httpHeaders = this.httpHeaders.set(
      'Authorization',
      'Bearer ' + this.token
    );
  }

  public async register(
    email: string,
    password: string
  ): Promise<IAuthResponse | undefined> {
    const response = await this.http
      .post<IAuthResponse>(this.apiUrl + 'auth/register', {
        email,
        password,
      })
      .toPromise();

    if (response) this.setToken(response.token);

    return response;
  }

  public async login(
    email: string,
    password: string
  ): Promise<IAuthResponse | undefined> {
    const response = await this.http
      .post<IAuthResponse>(this.apiUrl + 'auth/login', {
        email,
        password,
      })
      .toPromise();

    if (response) this.setToken(response.token);

    return response;
  }

  public async auth(): Promise<IAuthResponse | null | undefined> {
    if (!this.token) return null;
    this.httpHeaders = this.httpHeaders.set(
      'Authorization',
      'Bearer ' + this.token
    );

    const response = await this.http
      .post<IAuthResponse>(
        this.apiUrl + 'auth',
        {},
        { headers: this.httpHeaders }
      )
      .toPromise();

    if (response) this.setToken(response.token);

    return response;
  }

  public deauth(): void {
    localStorage.removeItem('token');
    this.token = '';
    this.httpHeaders = new HttpHeaders();
  }

  public createTest(test: ITest): void {
    this.http
      .post(this.apiUrl + 'tests', test, { headers: this.httpHeaders })
      .subscribe();
  }

  public deleteTest(id: string): void {
    this.http
      .delete(this.apiUrl + `tests/${id}`, { headers: this.httpHeaders })
      .subscribe();
  }

  public updateTest(test: ITest): void {
    this.http
      .patch(this.apiUrl + 'tests', test, { headers: this.httpHeaders })
      .subscribe();
  }

  public startTest(testId: string): void {
    this.http
      .post(
        this.apiUrl + `tests/start/${testId}`,
        {},
        { headers: this.httpHeaders }
      )
      .subscribe();
  }

  public getTest(id: string): Observable<ITest> {
    return this.http.get<ITest>(this.apiUrl + `tests/${id}`);
  }

  public registerStudent(testCode: string, name: string): void {
    this.http
      .post<void>(this.apiUrl + `tests/${testCode}/register`, {
        name: name,
      })
      .subscribe();
  }

  public putAnswer(
    testCode: string,
    studentName: string,
    questionIndex: number,
    answerIndex: number
  ): void {
    this.http
      .post(this.apiUrl + `tests/${testCode}/answer`, {
        name: studentName,
        questionIndex,
        answerIndex,
      })
      .subscribe();
  }
}
