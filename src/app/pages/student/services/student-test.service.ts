import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { ITest } from 'src/app/shared/models/test';
import { StudentService } from 'src/app/shared/services/student.service';

@Injectable({
  providedIn: 'root',
})
export class StudentTestService {
  constructor(private socket: Socket, private studentService: StudentService) {}

  getTest(id: string): Observable<ITest> {
    return this.studentService.getTest(id);
  }

  registerStudent(testCode: string, name: string): void {
    this.studentService.registerStudent(testCode, name);
    this.socket.emit('registerStudentToServer', {
      testCode: testCode,
      studentName: name,
      answers: [],
    });
  }

  putAnswer(
    testCode: string,
    studentName: string,
    questionIndex: number,
    answerIndex: number
  ): void {
    this.studentService.putAnswer(
      testCode,
      studentName,
      questionIndex,
      answerIndex
    );

    this.socket.emit('putAnswerToServer', {
      testCode: testCode,
      studentName: studentName,
      questionIndex: questionIndex,
      answerIndex: answerIndex,
    });
  }
}
