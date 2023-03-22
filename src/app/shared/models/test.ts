import { IQeustion } from './question';

export interface ITest {
  id: string;
  name: string;
  description: string;
  questions: Array<IQeustion>;
  time: string;
  correctAnswersCountMark_5: number;
  correctAnswersCountMark_4: number;
  correctAnswersCountMark_3: number;
  isStarted: boolean;
  code: string;
}
