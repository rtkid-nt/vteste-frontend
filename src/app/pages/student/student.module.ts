import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentComponent } from './student.component';

import { MaterialModule } from 'src/material.module';
import { TestModule } from 'src/app/shared/components/test/test.module';
import { StudentTestCodeComponent } from './components/student-test-code/student-test-code.component';
import { StudentTestAuthComponent } from './components/student-test-auth/student-test-auth.component';
import { StudentTestComponent } from './components/student-test/student-test.component';

@NgModule({
  declarations: [
    StudentComponent,
    StudentTestCodeComponent,
    StudentTestAuthComponent,
    StudentTestComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TestModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [StudentComponent],
})
export class StudentModule {}
