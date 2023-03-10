import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestStartComponent } from './components/test-start/test-start.component';
import { TestTitleComponent } from './components/test-title/test-title.component';
import { TestQuestionComponent } from './components/test-question/test-question.component';
import { TestEndComponent } from './components/test-end/test-end.component';
import { MaterialModule } from 'src/material.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    TestStartComponent,
    TestTitleComponent,
    TestQuestionComponent,
    TestEndComponent,
    TestComponent,
  ],
  exports: [
    TestStartComponent,
    TestTitleComponent,
    TestQuestionComponent,
    TestEndComponent,
    TestComponent,
  ],
})
export class TestModule {}
