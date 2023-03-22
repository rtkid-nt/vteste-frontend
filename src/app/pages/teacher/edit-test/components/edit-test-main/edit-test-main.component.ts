import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEditTest } from '../../models/editTest';
import { ImageService } from '../../services/image.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-edit-test-main',
  templateUrl: './edit-test-main.component.html',
  styleUrls: ['./edit-test-main.component.scss'],
})
export class EditTestMainComponent {
  constructor(private imageService: ImageService) {}

  onRemoveFile(event: Event): void {
    event.stopPropagation();
  }

  @Input() test!: IEditTest;

  getNameErrorMessage(): string {
    return this.test.name.hasError('required')
      ? 'Вы не ввели название теста'
      : '';
  }

  getTimeErrorMessage(): string {
    if (this.test.time.hasError('required'))
      return 'Вы не ввели время на выполнения теста';

    return this.test.time.hasError('pattern')
      ? 'Введите число от 1 до 100'
      : '';
  }

  getDayErrorMessage(): string {
    if (this.test.day.hasError('required'))
      return 'Вы не ввели количество дней до завершения теста';

    return this.test.time.hasError('pattern') ? 'Введите число от 1 до 10' : '';
  }

  isInvalid(): boolean {
    return (
      this.test.name.invalid || this.test.time.invalid || this.test.day.invalid
    );
  }

  @Output() completedEvent = new EventEmitter<boolean>();

  nextStep(): void {
    this.completedEvent.emit(true);
  }
}
