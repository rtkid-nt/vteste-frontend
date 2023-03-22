import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { IEditQuestion } from '../../models/editQuestion';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-test-questions',
  templateUrl: './edit-test-questions.component.html',
  styleUrls: ['./edit-test-questions.component.scss'],
})
export class EditTestQuestionsComponent implements OnInit {
  ngOnInit(): void {
    if (!this.questions.length) {
      this.addQuestion();
    }
    this.selectedQuestion = this.questions[0];
  }

  @Input() questions!: Array<IEditQuestion>;

  selectedQuestion?: IEditQuestion;

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

  selectQuestion(question: IEditQuestion): void {
    this.selectedQuestion = question;
  }

  addQuestion(): void {
    this.questions.push({
      id: 0,
      name: new FormControl<string>(`Вопрос`, Validators.required),
      description: '',
      answers: [],
    });
  }

  deteleQuestion(questionIndex: number): void {
    if (this.questions.length === 1) return;
    this.questions.splice(questionIndex, 1);
  }

  copyQuestion(question: IEditQuestion): void {
    let copyedQuestion: IEditQuestion = {
      id: question.id,
      name: new FormControl<string>(
        question.name.value || 'Название вопроса',
        Validators.required
      ),
      description: question.description,
      answers: [...question.answers],
    };

    this.questions.push(copyedQuestion);
  }

  isInvalid(): boolean {
    let invalid = false;

    this.questions.forEach((question) => {
      if (question.name.invalid) invalid = true;

      question.answers.forEach((answer) => {
        if (answer.text.invalid) invalid = true;
      });
    });

    return invalid;
  }

  @Output() completedEvent = new EventEmitter<boolean>();

  nextStep(): void {
    this.completedEvent.emit(true);
  }
}
