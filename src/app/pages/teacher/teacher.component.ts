import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent {
  constructor(private router: Router, private user: UserService) {}

  links = [
    { name: 'Тесты', path: 'tests' },
    { name: 'Мониторинг', path: 'monitoring' },
  ];
  activeLink = this.links[0];

  logout() {
    this.router.navigate(['/login']);
    this.user.deauth();
  }
}
