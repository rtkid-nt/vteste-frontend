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
  ngOnInit(): void {}

  @Output() saveTestEvent: EventEmitter<void> = new EventEmitter<void>();
  @Input() editTest!: IEditTest;

  test?: ITest;

  public updateTest(): void {
    this.test = {
      id: this.editTest.id,
      name: this.editTest.name.value!,
      description: this.editTest.description,
      time: this.editTest.time.value!,
      correctAnswersCountMark_5: this.editTest.correctAnswersCountMark_5,
      correctAnswersCountMark_4: this.editTest.correctAnswersCountMark_4,
      correctAnswersCountMark_3: this.editTest.correctAnswersCountMark_3,
      isStarted: this.editTest.isStarted,
      code: this.editTest.code,
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

  save(): void {
    this.saveTestEvent.emit();
  }
}
