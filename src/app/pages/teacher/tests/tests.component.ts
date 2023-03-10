import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITest } from 'src/app/shared/models/test';
import { EditTestService } from '../services/edit-test.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
})
export class TestsComponent implements OnInit {
  constructor(
    private router: Router,
    private testService: TestService,
    private editTestService: EditTestService
  ) {}

  ngOnInit(): void {
    this.tests = this.testService.getTests();
  }

  tests: Array<ITest> = [];

  deleteTest(testIndex: number): void {
    this.testService.deleteTest(testIndex);
  }

  createTest(): void {
    this.testService.createTest();
  }

  goToEditPage(test: ITest): void {
    this.editTestService.setEditTest(test);
    this.router.navigate(['teacher/editTest']);
  }
}
