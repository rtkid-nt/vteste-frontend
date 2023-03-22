import { Component, OnInit } from '@angular/core';
import { MonitoringService } from '../services/monitoring.service';
import { IMonitoringTest } from './models/monitoringTest';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss'],
})
export class MonitoringComponent implements OnInit {
  constructor(private monitoringService: MonitoringService) {
    this.monitoringService.monitoring();
  }

  ngOnInit(): void {
    this.monitoringTests = this.monitoringService.getMonitoringTests();
  }

  monitoringTests?: IMonitoringTest[];

  getCountCorrectAnswers(answers: boolean[]): number {
    let count = 0;
    answers.forEach((a) => {
      if (a) count++;
    });

    return count;
  }

  getCountBadAnswers(answers: boolean[]): number {
    let count = 0;
    answers.forEach((a) => {
      if (!a) count++;
    });

    return count;
  }
}
