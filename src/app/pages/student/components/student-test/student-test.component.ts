import { Component, Input } from '@angular/core';
import { ITest } from 'src/app/shared/models/test';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.scss'],
})
export class StudentTestComponent {
  @Input() test!: ITest;
}
