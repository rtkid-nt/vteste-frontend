import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-test-auth',
  templateUrl: './student-test-auth.component.html',
  styleUrls: ['./student-test-auth.component.scss'],
})
export class StudentTestAuthComponent {
  @Input() studentName!: FormControl<string | null>;
  @Output() registrateStudentEvent: EventEmitter<void> =
    new EventEmitter<void>();

  registrateStudent(): void {
    this.registrateStudentEvent.emit();
  }
}
