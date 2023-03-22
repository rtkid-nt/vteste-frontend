import { Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { IMonitoringTest } from '../monitoring/models/monitoringTest';
import { Socket } from 'ngx-socket-io';
import { IPutAnswer } from '../models/putAnswer';
import { ITest } from 'src/app/shared/models/test';
import { IRegisterStudent } from '../models/registerStudent';

@Injectable({
  providedIn: 'root',
})
export class MonitoringService {
  constructor(private socket: Socket, private user: UserService) {
    this.monitoringTests = user.getUser()?.testResults || [];
    this.tests = user.getUser()?.tests || [];
  }

  tests: ITest[];
  monitoringTests: IMonitoringTest[];

  monitoring(): void {
    this.socket
      .fromEvent<IRegisterStudent>('registerStudentToClient')
      .subscribe((registerStudent: IRegisterStudent) => {
        const monitoringTest = this.monitoringTests.find((t) => {
          console.log(registerStudent.testCode === t.testCode);

          return t.testCode === registerStudent.testCode;
        });

        monitoringTest?.students?.push({
          name: registerStudent.studentName,
          answers: registerStudent.answers,
        });
      });

    this.socket
      .fromEvent<IPutAnswer>('putAnswerToClient')
      .subscribe((putAnswer: IPutAnswer) => {
        const monitoringTest = this.monitoringTests.find(
          (t) => t.testCode === putAnswer.testCode
        );
        const student = monitoringTest?.students?.find(
          (s) => s.name === putAnswer.studentName
        );

        const isValid =
          this.tests.find((t) => t.code === putAnswer.testCode)?.questions[
            putAnswer.questionIndex
          ].answers[putAnswer.answerIndex].isValid || false;

        student?.answers.map((a) => a);
        student?.answers.push(isValid);
      });
  }

  addMonitoringTests(monitoringTest: IMonitoringTest): void {
    this.monitoringTests.push(monitoringTest);
  }

  getMonitoringTests(): IMonitoringTest[] | undefined {
    return this.monitoringTests;
  }
}
