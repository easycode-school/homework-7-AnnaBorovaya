import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * isAuth - проверяет записаны ли данный в localStorage
   * возвращает true или false
   */
  isAuth() {
    return localStorage.getItem('name') && localStorage.getItem('password') ? true : false;
  }
}
