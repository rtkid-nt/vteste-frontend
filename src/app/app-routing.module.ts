import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MonitoringComponent } from './pages/teacher/monitoring/monitoring.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { TestsComponent } from './pages/teacher/tests/tests.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { EditTestComponent } from './pages/teacher/edit-test/edit-test.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    component: AuthPageComponent,
  },
  {
    path: 'login',
    component: AuthPageComponent,
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      {
        path: '',
        redirectTo: 'tests',
        pathMatch: 'full',
      },
      {
        path: 'tests',
        component: TestsComponent,
      },
      {
        path: 'monitoring',
        component: MonitoringComponent,
      },
      {
        path: 'editTest',
        component: EditTestComponent,
      },
    ],
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
