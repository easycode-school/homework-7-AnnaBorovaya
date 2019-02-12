import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interface/user.interface';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public userCurrentEdit: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private messageService: MessageService,
  ) {}

  /**
   * ngnInit - метод в котором получаем значение свойства id текущей страницы
   * далее получаем данные одного user и записываем его в переменную userCurrentEdit
   */
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.usersService.getUser(id).subscribe((user: User) => {
    this.userCurrentEdit = user;
    });
  }
  /**
   * @param form - NgForm
   * editHandler - при сабмите формы редактирования User на сервер отправляется запрос
   * в случае успешного ответа выводится сообщение об успешном редактировании и происходит редирект на страницу users
   */
  editHandler(form) {
    this.usersService.editUser(this.userCurrentEdit.id, this.userCurrentEdit).subscribe(
      (user) => {
        this.messageService.add({severity: 'info', summary: 'Service Message', detail: 'User successfully edited'});
        this.router.navigate(['/users']);
      },
      (err) => console.log(err),
      () => console.log('Complit')
    );
  }
}

