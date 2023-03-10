import { IAnswer } from './answer';

export interface IQeustion {
  id: number;
  name: string;
  description: string;
  answers: Array<IAnswer>;
}
