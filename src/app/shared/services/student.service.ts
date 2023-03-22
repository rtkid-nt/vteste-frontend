import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITest } from '../models/test';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private apiService: ApiService) {}

  public getTest(id: string): Observable<ITest> {
    return this.apiService.getTest(id);
  }

  public registerStudent(testCode: string, name: string): void {
    return this.apiService.registerStudent(testCode, name);
  }

  public putAnswer(
    testCode: string,
    studentName: string,
    questionIndex: number,
    answerIndex: number
  ): void {
    this.apiService.putAnswer(
      testCode,
      studentName,
      questionIndex,
      answerIndex
    );
  }
}
