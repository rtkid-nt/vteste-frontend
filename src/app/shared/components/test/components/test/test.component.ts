import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ITest } from 'src/app/shared/models/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @Input() test!: ITest;
  @Output() questionCompletedEvent: EventEmitter<number> =
    new EventEmitter<number>();

  @ViewChild(MatStepper) stepper!: MatStepper;

  isTestRunning: boolean = false;
  currentQuestionIndex: number = 0;
  correctAnswerCount: number = 0;

  startTest(): void {
    this.isTestRunning = true;
  }

  nextQuestion(answerIndex: number): void {
    if (
      this.test.questions[this.currentQuestionIndex].answers[answerIndex]
        .isValid
    )
      this.correctAnswerCount++;

    if (this.currentQuestionIndex + 1 === this.test.questions.length)
      this.isTestRunning = false;

    this.currentQuestionIndex++;
    this.questionCompletedEvent.emit(answerIndex);
  }

  stopTest(): void {
    console.log(this.currentQuestionIndex);

    for (
      let i = this.currentQuestionIndex;
      i < this.test.questions.length;
      i++
    ) {
      this.stepper.next();
    }

    this.isTestRunning = false;
  }

  getMark(): number {
    if (this.correctAnswerCount >= this.test.correctAnswersCountMark_5)
      return 5;
    if (this.correctAnswerCount >= this.test.correctAnswersCountMark_4)
      return 4;
    if (this.correctAnswerCount >= this.test.correctAnswersCountMark_3)
      return 3;
    return 2;
  }
}
