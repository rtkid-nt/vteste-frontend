import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

import { TeacherModule } from './pages/teacher/teacher.module';
import { StudentModule } from './pages/student/student.module';
import { HttpClientModule } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
  declarations: [AppComponent, NotFoundPageComponent, AuthPageComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TeacherModule,
    StudentModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
