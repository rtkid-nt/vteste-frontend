import { Component, Input } from '@angular/core';
import { ITest } from 'src/app/shared/models/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @Input() test!: ITest;

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
  }

  getMark(): number {
    if (this.correctAnswerCount >= this.test.correctAnswers_5) return 5;
    if (this.correctAnswerCount >= this.test.correctAnswers_4) return 4;
    if (this.correctAnswerCount >= this.test.correctAnswers_3) return 3;
    return 2;
  }
}
