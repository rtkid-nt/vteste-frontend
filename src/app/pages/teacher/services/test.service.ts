import { Injectable } from '@angular/core';
import { IEditTest } from '../edit-test/models/editTest';
import { IAnswer } from 'src/app/shared/models/answer';
import { IQeustion } from 'src/app/shared/models/question';
import { ITest } from 'src/app/shared/models/test';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private tests: Array<ITest> = [
    {
      id: 1,
      name: 'Логарифмы',
      description: 'Это тест на знание логарифмов',
      questions: [
        {
          id: 1,
          name: 'Что такое логарифм?',
          description: 'ЧТО ЭТО ТАКОЕ?',
          answers: [
            { id: 1, text: 'Это магия', isValid: false },
            { id: 2, text: 'Это логарифм', isValid: true },
            { id: 3, text: 'Это степень', isValid: false },
            { id: 4, text: 'Это дота', isValid: false },
            { id: 5, text: 'Это крип', isValid: false },
          ],
        },
        {
          id: 2,
          name: 'Что такое степень?',
          description: 'ЧТО ЭТО ТАКОЕ?',
          answers: [
            { id: 1, text: 'Это магия', isValid: false },
            { id: 2, text: 'Это степень', isValid: true },
            { id: 3, text: 'Это степень', isValid: false },
            { id: 4, text: 'Это дота', isValid: false },
            { id: 5, text: 'Это крип', isValid: false },
          ],
        },
        {
          id: 3,
          name: 'Что такое первообразная?',
          description: 'ЧТО ЭТО ТАКОЕ?',
          answers: [
            { id: 1, text: 'Это магия', isValid: false },
            { id: 2, text: 'Это первообразная', isValid: true },
            { id: 3, text: 'Это степень', isValid: false },
            { id: 4, text: 'Это дота', isValid: false },
            { id: 5, text: 'Это крип', isValid: false },
          ],
        },
        {
          id: 4,
          name: 'Что такое производная?',
          description: 'ЧТО ЭТО ТАКОЕ?',
          answers: [
            { id: 1, text: 'Это магия', isValid: false },
            { id: 2, text: 'Это производная', isValid: true },
            { id: 3, text: 'Это степень', isValid: false },
            { id: 4, text: 'Это дота', isValid: false },
            { id: 5, text: 'Это крип', isValid: false },
          ],
        },
        {
          id: 5,
          name: 'Что такое факториал?',
          description: 'ЧТО ЭТО ТАКОЕ?',
          answers: [
            { id: 1, text: 'Это магия', isValid: false },
            { id: 2, text: 'Это факториал', isValid: true },
            { id: 3, text: 'Это степень', isValid: false },
            { id: 4, text: 'Это дота', isValid: false },
            { id: 5, text: 'Это крип', isValid: false },
          ],
        },
      ],
      time: '20',
      correctAnswers_5: 0,
      correctAnswers_4: 0,
      correctAnswers_3: 0,
    },
    {
      id: 2,
      name: 'Степени',
      description: 'Это тест на знание логарифмов',
      questions: [],
      time: '15',
      correctAnswers_5: 0,
      correctAnswers_4: 0,
      correctAnswers_3: 0,
    },
    {
      id: 3,
      name: 'Производная',
      description: 'Это тест на знание степени',
      questions: [],
      time: '15',
      correctAnswers_5: 0,
      correctAnswers_4: 0,
      correctAnswers_3: 0,
    },
    {
      id: 4,
      name: 'Первообразная',
      description: 'Это тест на знание первообразной',
      questions: [],
      time: '15',
      correctAnswers_5: 0,
      correctAnswers_4: 0,
      correctAnswers_3: 0,
    },
  ];

  getTests(): Array<ITest> {
    return this.tests;
  }

  deleteTest(testIndex: number): void {
    this.tests.splice(testIndex, 1);
  }

  createTest(): void {
    this.tests.push({
      id: (this.tests.at(-1)?.id || 0) + 1,
      name: 'Название',
      description: '',
      questions: [],
      time: '0',
      correctAnswers_5: 0,
      correctAnswers_4: 0,
      correctAnswers_3: 0,
    });
  }

  updateTest(editTest: IEditTest): void {
    let test = this.tests.find((test) => test.id === editTest.id);
    if (test) {
      test.name = editTest.name.value!;
      test.description = editTest.description;
      test.time = editTest.time.value!;
      test.correctAnswers_5 = editTest.correctAnswers_5;
      test.correctAnswers_4 = editTest.correctAnswers_4;
      test.correctAnswers_3 = editTest.correctAnswers_3;
      test.questions = editTest.questions.map(
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
      );
    }
  }
}
