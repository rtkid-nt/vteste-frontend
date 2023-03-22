import { Injectable } from '@angular/core';
import { IEditTest } from '../edit-test/models/editTest';
import { IAnswer } from 'src/app/shared/models/answer';
import { IQeustion } from 'src/app/shared/models/question';
import { ITest } from 'src/app/shared/models/test';
import { UserService } from 'src/app/shared/services/user.service';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private user: UserService) {}

  private tests: Array<ITest> = [];

  public loadTests() {
    let userTests = this.user.getUser()?.tests;
    if (userTests) this.tests = userTests;
  }

  public getTests(): Array<ITest> {
    return this.tests;
  }

  public deleteTest(testIndex: number): void {
    this.user.deleteTest(this.tests[testIndex].id);
    this.tests.splice(testIndex, 1);
  }

  public createTest(): void {
    const test: ITest = {
      id: uuid.v4(),
      name: 'Название',
      description: '',
      questions: [],
      time: '0',
      correctAnswersCountMark_5: 0,
      correctAnswersCountMark_4: 0,
      correctAnswersCountMark_3: 0,
      isStarted: false,
      code: uuid.v4().slice(0, 8),
    };

    this.user.createTest(test);
    this.tests.push(test);
  }

  public updateTest(editTest: IEditTest): void {
    let test = this.tests.find((test) => test.id === editTest.id);
    if (!test) return;

    test.name = editTest.name.value!;
    test.description = editTest.description;
    test.time = editTest.time.value!;
    test.correctAnswersCountMark_5 = editTest.correctAnswersCountMark_5;
    test.correctAnswersCountMark_4 = editTest.correctAnswersCountMark_4;
    test.correctAnswersCountMark_3 = editTest.correctAnswersCountMark_3;
    test.isStarted = editTest.isStarted;
    test.questions = editTest.questions.map(
      (question) =>
        <IQeustion>{
          name: question.name.value!,
          description: question.description,
          answers: question.answers.map(
            (answer) =>
              <IAnswer>{
                text: answer.text.value!,
                isValid: answer.isValid.value!,
              }
          ),
        }
    );

    this.user.updateTest(test);
  }

  public startTest(testId: string, testIndex: number): void {
    this.user.startTest(testId);
    this.tests[testIndex].isStarted = true;
  }
}
