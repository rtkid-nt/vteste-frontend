import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  constructor(public router: Router) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  hide = true;

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Вы не ввели почту';
    }

    return this.email.hasError('email') ? 'Неккоректная почта' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Вы не ввели пароль';
    }

    return this.password.hasError('minlength') ? 'Минимальная длина - 6' : '';
  }

  signup() {
    if (this.isFormInCorrect()) return;

    this.router.navigate(['teacher']);
  }

  login() {
    if (this.isFormInCorrect()) return;

    this.router.navigate(['teacher']);
  }

  isFormInCorrect() {
    return (
      this.getPasswordErrorMessage() !== '' ||
      this.getEmailErrorMessage() !== ''
    );
  }
}
