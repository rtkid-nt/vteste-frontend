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

  public async register(
    email: string,
    password: string
  ): Promise<IAuthResponse | undefined> {
    const response = await this.apiService.register(email, password);

    if (response) {
      this.isAuth = true;
      this.user = response.user;
    }

    return response;
  }

  public async login(
    email: string,
    password: string
  ): Promise<IAuthResponse | undefined> {
    const response = await this.apiService.login(email, password);

    if (response) {
      this.isAuth = true;
      this.user = response.user;
    }

    return response;
  }

  public async auth(): Promise<IAuthResponse | null | undefined> {
    const response = await this.apiService.auth();
    if (!response) return null;

    this.isAuth = true;
    this.user = response.user;

    return response;
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
