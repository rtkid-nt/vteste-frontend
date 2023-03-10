import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ITest } from 'src/app/shared/models/test';
import { StudentTestService } from './services/student-test.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  test?: ITest;
  testId = new FormControl<number>(0, Validators.required);
  studentName = new FormControl<string>('', Validators.required);

  constructor(private studentTestService: StudentTestService) {}

  getTest(): void {
    if (!this.testId.invalid) {
      this.test = this.studentTestService.getTest(this.testId.value!);
    }
  }

  registrateStudent(): void {}

  startTest(): void {}
}
