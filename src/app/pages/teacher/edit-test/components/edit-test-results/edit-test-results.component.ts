import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEditTest } from '../../models/editTest';

@Component({
  selector: 'app-edit-test-results',
  templateUrl: './edit-test-results.component.html',
  styleUrls: ['./edit-test-results.component.scss'],
})
export class EditTestResultsComponent implements OnInit {
  ngOnInit(): void {
    this.test.correctAnswers_5 = (this.test.questions.length / 100) * 85;
    this.test.correctAnswers_4 = (this.test.questions.length / 100) * 65;
    this.test.correctAnswers_3 = (this.test.questions.length / 100) * 45;
  }

  @Input() test!: IEditTest;
  @Output() completedEvent: EventEmitter<void> = new EventEmitter<void>();

  nextStep(): void {
    this.completedEvent.emit();
  }
}
