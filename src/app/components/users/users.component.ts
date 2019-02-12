import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from './../../interface/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  constructor(
    public usersService: UsersService
  ) {}

  /**
   * ngOnInit - обращаемся к методу getUsers() сервиса usersService
   * откуда получаем данные всех users и записываем в нашу переменную users
   */
  ngOnInit() {
    this.usersService.getUsers().subscribe((users: User[]) => this.users = users);
  }
}
