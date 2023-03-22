import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MonitoringComponent } from './monitoring/monitoring.component';
import { TestsComponent } from './tests/tests.component';

import { MaterialModule } from 'src/material.module';
import { TestModule } from 'src/app/shared/components/test/test.module';

import { TeacherComponent } from './teacher.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';

import { EditTestMainComponent } from './edit-test/components/edit-test-main/edit-test-main.component';
import { EditTestPreviewComponent } from './edit-test/components/edit-test-preview/edit-test-preview.component';
import { EditTestQuestionsComponent } from './edit-test/components/edit-test-questions/edit-test-questions.component';
import { EditQuestionInfoComponent } from './edit-test/components/edit-test-questions/components/edit-question-info.component';
import { EditTestResultsComponent } from './edit-test/components/edit-test-results/edit-test-results.component';
import { StudentComponent } from './monitoring/components/student/student.component';

@NgModule({
  declarations: [
    EditTestComponent,
    EditTestMainComponent,
    EditTestPreviewComponent,
    EditQuestionInfoComponent,
    EditTestQuestionsComponent,
    EditTestResultsComponent,
    CreateButtonComponent,
    MonitoringComponent,
    TestsComponent,
    TeacherComponent,
    StudentComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TestModule,
  ],
  bootstrap: [TeacherComponent],
})
export class TeacherModule {}
