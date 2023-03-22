import { FormControl } from '@angular/forms';

export interface IEditAnswer {
  id: number;
  text: FormControl<string | null>;
  isValid: FormControl<boolean | null>;
}
