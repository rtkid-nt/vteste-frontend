import { FormControl } from '@angular/forms';
import { IEditQuestion } from './editQuestion';

export interface IEditTest {
  id: string;
  name: FormControl<string | null>;
  description: string;
  questions: Array<IEditQuestion>;
  time: FormControl<string | null>;
  correctAnswersCountMark_5: number;
  correctAnswersCountMark_4: number;
  correctAnswersCountMark_3: number;
  isStarted: boolean;
  code: string;
}
