import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEditTest } from '../../models/editTest';

@Component({
  selector: 'app-edit-test-results',
  templateUrl: './edit-test-results.component.html',
  styleUrls: ['./edit-test-results.component.scss'],
})
export class EditTestResultsComponent implements OnInit {
  ngOnInit(): void {
    this.test.correctAnswersCountMark_5 = Math.floor(
      (this.test.questions.length / 100) * 85
    );
    this.test.correctAnswersCountMark_4 = Math.floor(
      (this.test.questions.length / 100) * 65
    );
    this.test.correctAnswersCountMark_3 = Math.floor(
      (this.test.questions.length / 100) * 45
    );
  }

  @Input() test!: IEditTest;
  @Output() completedEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() updatePreview: EventEmitter<void> = new EventEmitter<void>();

  nextStep(): void {
    this.completedEvent.emit();
    this.updatePreview.emit();
  }
}
