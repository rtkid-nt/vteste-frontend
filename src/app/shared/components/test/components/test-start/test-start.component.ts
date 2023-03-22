import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITest } from 'src/app/shared/models/test';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.scss'],
})
export class TestStartComponent {
  @Input() name!: string;
  @Input() description!: string;

  @Output() testStartedEvent: EventEmitter<void> = new EventEmitter<void>();

  startTest(): void {
    this.testStartedEvent.emit();
  }
}
