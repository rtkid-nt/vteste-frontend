import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ITest } from 'src/app/shared/models/test';
import { StudentTestService } from './services/student-test.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  test?: ITest;
  testCode = new FormControl<string>('', Validators.required);
  studentName = new FormControl<string>('', Validators.required);
  questionIndex: number = 0;

  @ViewChild(MatStepper) stepper!: MatStepper;

  constructor(private studentTestService: StudentTestService) {}

  getTest(): void {
    if (!this.testCode.invalid) {
      this.studentTestService.getTest(this.testCode.value!).subscribe((res) => {
        this.test = res;
        this.stepper.next();
      });
    }
  }

  registrateStudent(): void {
    if (!this.studentName.invalid) {
      this.studentTestService.registerStudent(
        this.testCode.value!,
        this.studentName.value!
      );
      this.stepper.next();
    }
  }

  questionCompleted(answerIndex: number): void {
    this.studentTestService.putAnswer(
      this.testCode.value!,
      this.studentName.value!,
      this.questionIndex,
      answerIndex
    );
    this.questionIndex++;
  }

  startTest(): void {}
}
