import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IEditAnswer } from '../edit-test/models/editAnswers';
import { IEditQuestion } from '../edit-test/models/editQuestion';
import { IEditTest } from '../edit-test/models/editTest';
import { ITest } from 'src/app/shared/models/test';

@Injectable({
  providedIn: 'root',
})
export class EditTestService {
  private editTest?: IEditTest;

  getEditTest(): IEditTest | undefined {
    return this.editTest;
  }

  setEditTest(test: ITest) {
    this.editTest = {
      id: test.id,
      name: new FormControl<string>(test.name, Validators.required),
      description: test.description,
      correctAnswers_5: test.correctAnswers_5,
      correctAnswers_4: test.correctAnswers_4,
      correctAnswers_3: test.correctAnswers_3,
      questions: test.questions.map(
        (question) =>
          <IEditQuestion>{
            id: question.id,
            name: new FormControl<string>(question.name),
            description: question.description,
            answers: question.answers.map(
              (answer) =>
                <IEditAnswer>{
                  id: answer.id,
                  text: new FormControl<string>(answer.text),
                  isValid: new FormControl<boolean>(answer.isValid),
                }
            ),
          }
      ),
      time: new FormControl<string>(test.time, Validators.required),
    };
  }
}
