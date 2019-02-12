import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { User } from './../interface/user.interface';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  /**
   * getUsers - делает запрос на API и возвращает данные о всех users
   */
  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiUrl}/users`);
  }

  /**
   * getUser - делает запрос на API и возвращает данные одного user
   * @param id: string
   */
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  /**
   * editUser - отправляет отредактируемого Usera на сервер
   * @param id string
   * @param editUser User
   */
  editUser(id, editUser): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this.http.put<User>(`${this.apiUrl}/users/${id}`, editUser, httpOptions);
  }
}
