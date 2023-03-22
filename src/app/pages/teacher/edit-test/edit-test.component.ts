import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { EditTestService } from '../services/edit-test.service';
import { TestService } from '../services/test.service';
import { EditTestPreviewComponent } from './components/edit-test-preview/edit-test-preview.component';
import { IEditTest } from './models/editTest';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.scss'],
})
export class EditTestComponent implements OnInit {
  constructor(
    private router: Router,
    private editTestService: EditTestService,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    let editTest = this.editTestService.getEditTest();
    if (editTest) this.editTest = editTest;
  }

  editTest?: IEditTest;

  @ViewChild(MatStepper) stepper!: MatStepper;
  @ViewChild(EditTestPreviewComponent)
  previewComponent!: EditTestPreviewComponent;

  nextStep(): void {
    let selectedStep = this.stepper.selected;
    if (!selectedStep) return;
    if (selectedStep.completed) return;

    selectedStep.completed = true;
    this.stepper.next();
  }

  updatePreview(): void {
    this.previewComponent.updateTest();
  }

  saveTest(): void {
    this.testService.updateTest(this.editTest!);
    this.router.navigate(['/teacher']);
  }
}
