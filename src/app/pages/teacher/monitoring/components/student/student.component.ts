import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  @Input() questionsCount!: number;
  @Input() name!: string;
  @Input() answers!: boolean[];

  getGreenBgWidth(): number {
    return (this.getCountCorrectAnswers() / this.questionsCount) * 100;
  }

  getRedBgWidth(): number {
    return (this.getCountBadAnswers() / this.questionsCount) * 100;
  }

  getCountCorrectAnswers(): number {
    let count = 0;
    this.answers.forEach((a) => {
      if (a) count++;
    });

    return count;
  }

  getCountBadAnswers(): number {
    let count = 0;
    this.answers.forEach((a) => {
      if (!a) count++;
    });

    return count;
  }
}
