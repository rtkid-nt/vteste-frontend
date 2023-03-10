import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IEditAnswer } from '../../../models/editAnswers';
import { IEditQuestion } from '../../../models/editQuestion';

@Component({
  selector: 'app-edit-question-info',
  templateUrl: './edit-question-info.component.html',
  styleUrls: ['./edit-question-info.component.scss'],
})
export class EditQuestionInfoComponent {
  @Input() question!: IEditQuestion;

  getTitleErrorMessage(): string {
    return this.question.name.hasError('required')
      ? 'Вы не ввели название вопроса'
      : '';
  }

  getAnswerTextError(answer: IEditAnswer): string {
    return answer.text.hasError('required') ? 'Вы не ввели ответ' : '';
  }

  addAnswer(): void {
    let nextId: number = (this.question.answers.at(-1)?.id || 0) + 1;

    this.question.answers.push({
      id: nextId,
      text: new FormControl<string>('', Validators.required),
      isValid: new FormControl<boolean>(false),
    });
  }

  deleteAnswer(answerIndex: number): void {
    this.question.answers.splice(answerIndex, 1);
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.question.answers,
      event.previousIndex,
      event.currentIndex
    );
  }
}
