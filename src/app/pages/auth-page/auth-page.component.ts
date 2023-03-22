import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  constructor(public router: Router, private user: UserService) {}

  ngOnInit(): void {
    const response$ = this.user.auth();

    if (response$)
      response$.subscribe(() => {
        this.router.navigate(['teacher']);
      });
  }

  email: FormControl<string | null> = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password: FormControl<string | null> = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  hide: boolean = true;

  getEmailErrorMessage(): string {
    if (this.email.hasError('required')) return 'Вы не ввели почту';

    return this.email.hasError('email') ? 'Неккоректная почта' : '';
  }

  getPasswordErrorMessage(): string {
    if (this.password.hasError('required')) return 'Вы не ввели пароль';

    return this.password.hasError('minlength') ? 'Минимальная длина - 6' : '';
  }

  signup(): void {
    if (this.isFormInCorrect()) return;

    this.user.register(this.email.value!, this.password.value!);

    this.router.navigate(['teacher']);
  }

  login(): void {
    if (this.isFormInCorrect()) return;

    this.user.login(this.email.value!, this.password.value!);

    this.router.navigate(['teacher']);
  }

  isFormInCorrect(): boolean {
    return (
      this.getPasswordErrorMessage() !== '' ||
      this.getEmailErrorMessage() !== ''
    );
  }
}
