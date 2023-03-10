import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQeustion } from 'src/app/shared/models/question';

@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.scss'],
})
export class TestQuestionComponent {
  @Input() question!: IQeustion;
  @Output() questionCompletedEvent: EventEmitter<number> =
    new EventEmitter<number>();

  nextQeustion(answerIndex: number): void {
    this.questionCompletedEvent.emit(answerIndex);
  }
}
