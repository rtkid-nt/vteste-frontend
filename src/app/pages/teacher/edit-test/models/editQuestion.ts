import { FormControl } from '@angular/forms';
import { IEditAnswer } from './editAnswers';

export interface IEditQuestion {
  id: number;
  name: FormControl<string | null>;
  description: string;
  answers: Array<IEditAnswer>;
}
