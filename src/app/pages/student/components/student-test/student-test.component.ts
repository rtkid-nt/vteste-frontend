import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITest } from 'src/app/shared/models/test';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.scss'],
})
export class StudentTestComponent {
  @Input() test!: ITest;
  @Output() questionCompletedEvent: EventEmitter<number> =
    new EventEmitter<number>();

  questionCompleted(answerIndex: number): void {
    this.questionCompletedEvent.emit(answerIndex);
  }
}
