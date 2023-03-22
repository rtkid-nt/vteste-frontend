import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IUser } from '../models/user';
import { IAuthResponse } from '../models/auth.response';
import { Observable } from 'rxjs';
import { ITest } from '../models/test';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  private user?: IUser;
  private isAuth: boolean = false;

  public register(email: string, password: string): Observable<IAuthResponse> {
    const response$ = this.apiService.register(email, password);
    this.isAuth = true;

    response$.subscribe((res: IAuthResponse) => {
      this.user = res.user;
    });

    return response$;
  }

  public login(email: string, password: string): Observable<IAuthResponse> {
    const response$ = this.apiService.login(email, password);
    this.isAuth = true;

    response$.subscribe((res: IAuthResponse) => {
      this.user = res.user;
    });

    return response$;
  }

  public auth(): Observable<IAuthResponse> | null {
    const response$ = this.apiService.auth();
    if (!response$) return null;
    this.isAuth = true;

    response$.subscribe((res: IAuthResponse) => {
      this.user = res.user;
    });

    return response$;
  }

  public isAuthed(): boolean {
    return this.isAuth;
  }

  public deauth(): void {
    this.isAuth = false;
    this.apiService.deauth();
  }

  public getUser(): IUser | undefined {
    return this.user;
  }

  public createTest(test: ITest): void {
    this.apiService.createTest(test);
  }

  public deleteTest(id: string): void {
    this.apiService.deleteTest(id);
  }

  public updateTest(test: ITest): void {
    this.apiService.updateTest(test);
  }

  public startTest(testId: string): void {
    this.apiService.startTest(testId);
  }
}
