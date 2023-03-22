import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-end',
  templateUrl: './test-end.component.html',
  styleUrls: ['./test-end.component.scss'],
})
export class TestEndComponent {
  @Input() mark!: number;
  @Input() correctAnswerCount!: number;
  @Input() questionsCount!: number;
}
