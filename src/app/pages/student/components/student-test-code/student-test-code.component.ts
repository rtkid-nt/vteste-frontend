import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-test-code',
  templateUrl: './student-test-code.component.html',
  styleUrls: ['./student-test-code.component.scss'],
})
export class StudentTestCodeComponent {
  @Input() testId!: FormControl<number | null>;
  @Output() getTestEvent: EventEmitter<void> = new EventEmitter<void>();

  getTest(): void {
    this.getTestEvent.emit();
  }
}
