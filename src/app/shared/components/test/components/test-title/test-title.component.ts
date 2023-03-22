import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITest } from 'src/app/shared/models/test';

@Component({
  selector: 'app-test-title',
  templateUrl: './test-title.component.html',
  styleUrls: ['./test-title.component.scss'],
})
export class TestTitleComponent {
  @Input() questionsCount!: number;
  @Input() time!: string;
  @Input() currentQuestionNumber!: number;

  @Output() timeEndEvent: EventEmitter<void> = new EventEmitter<void>();

  timeLeftSeconds: number = 0;
  timerInterval: any;

  ngOnInit(): void {
    this.timeLeftSeconds = Number(this.time) * 60;
    this.startTest();
  }

  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }

  startTest(): void {
    this.timerInterval = setInterval(() => {
      if (this.timeLeftSeconds > 0) this.timeLeftSeconds--;
      else this.timeLeftSeconds = 0;
      if (this.timeLeftSeconds <= 0) this.timeEndEvent.emit();
    }, 1000);
  }

  getTime(): string {
    const min: number = Math.trunc(this.timeLeftSeconds / 60);

    let minutes: string = String(min);
    if (minutes.length === 1) minutes = '0' + minutes;

    let seconds: string = String(this.timeLeftSeconds - min * 60);
    if (seconds.length === 1) seconds = '0' + seconds;

    return `${minutes}:${seconds}`;
  }
}
