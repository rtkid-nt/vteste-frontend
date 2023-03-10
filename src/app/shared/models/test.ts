import { IQeustion } from './question';

export interface ITest {
  id: number;
  name: string;
  description: string;
  questions: Array<IQeustion>;
  time: string;
  correctAnswers_5: number;
  correctAnswers_4: number;
  correctAnswers_3: number;
}
