import { FormControl } from '@angular/forms';
import { IEditQuestion } from './editQuestion';

export interface IEditTest {
  id: number;
  name: FormControl<string | null>;
  description: string;
  questions: Array<IEditQuestion>;
  time: FormControl<string | null>;
  correctAnswers_5: number;
  correctAnswers_4: number;
  correctAnswers_3: number;
}
