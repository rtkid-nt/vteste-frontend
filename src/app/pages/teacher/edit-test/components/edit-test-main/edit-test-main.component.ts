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

  selectedFile?: ImageSnippet;

  private onSuccess(): void {
    if (this.selectedFile) {
      this.selectedFile.pending = false;
      this.selectedFile.status = 'ok';
    }
  }

  private onError(): void {
    if (this.selectedFile) {
      this.selectedFile.pending = false;
      this.selectedFile.status = 'fail';
      this.selectedFile.src = '';
    }
  }

  onSelectFile(imageInput: any): void {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;

      this.imageService.uploadImage(this.selectedFile.file)
        ? this.onSuccess()
        : this.onError();
    });

    reader.readAsDataURL(file);
  }

  onRemoveFile(event: Event): void {
    event.stopPropagation();
    this.selectedFile = undefined;
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

  isInvalid(): boolean {
    return this.test.name.invalid || this.test.time.invalid;
  }

  @Output() completedEvent = new EventEmitter<boolean>();

  nextStep(): void {
    this.completedEvent.emit(true);
  }
}
