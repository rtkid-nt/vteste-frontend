import { Injectable } from '@angular/core';
import { ITest } from 'src/app/shared/models/test';

@Injectable({
  providedIn: 'root',
})
export class StudentTestService {
  private test: ITest = {
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
    correctAnswers_5: 4,
    correctAnswers_4: 3,
    correctAnswers_3: 2,
  };

  getTest(testId: number): ITest {
    return this.test;
  }
}
