import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login = {
    loginUser: '',
    passwordUser: ''
  };

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  /**
   * ngOnInit - обращаемся к методу isAuth сервиса AuthService
   * в котором проходит проверка на то залогинен ли пользователь
   * и если true то редиректимся на страницу users
   */
  ngOnInit() {
    if (this.auth.isAuth()) {
      this.router.navigate(['/users']);
    }
  }
  /**
   * addDataHandler - метод-хендлер отрабатывающий при сабмите формы Login
   * записывающий данные в localStorage
   * и затем происходит редирект на стрнаицу users
   */
  addDataHandler() {
    localStorage.setItem('name', this.login.loginUser);
    localStorage.setItem('password', this.login.passwordUser);
    this.router.navigate([`/users`]);
  }
}
