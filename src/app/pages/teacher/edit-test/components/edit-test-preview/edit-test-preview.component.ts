import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAnswer } from 'src/app/shared/models/answer';
import { IQeustion } from 'src/app/shared/models/question';
import { ITest } from 'src/app/shared/models/test';
import { IEditTest } from '../../models/editTest';

@Component({
  selector: 'app-edit-test-preview',
  templateUrl: './edit-test-preview.component.html',
  styleUrls: ['./edit-test-preview.component.scss'],
})
export class EditTestPreviewComponent implements OnInit {
  ngOnInit(): void {
    this.test = {
      id: this.editTest.id,
      name: this.editTest.name.value!,
      description: this.editTest.description,
      time: this.editTest.time.value!,
      correctAnswers_5: this.editTest.correctAnswers_5,
      correctAnswers_4: this.editTest.correctAnswers_4,
      correctAnswers_3: this.editTest.correctAnswers_3,
      questions: this.editTest.questions.map(
        (question) =>
          <IQeustion>{
            id: question.id,
            name: question.name.value!,
            description: question.description,
            answers: question.answers.map(
              (answer) =>
                <IAnswer>{
                  id: answer.id,
                  text: answer.text.value!,
                  isValid: answer.isValid.value!,
                }
            ),
          }
      ),
    };
  }

  @Output() saveTestEvent: EventEmitter<void> = new EventEmitter<void>();
  @Input() editTest!: IEditTest;

  test?: ITest;

  save(): void {
    this.saveTestEvent.emit();
  }
}
