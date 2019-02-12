import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MessageService} from 'primeng/api';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public user: User;
  public id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  /**
   * ngnInit - метод в котором получаем значение свойства id текущей страницы
   * далее получаем данные одного user и записываем его в переменную user
   */
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.usersService.getUser(this.id).subscribe((user: User) => {
      this.user = user;
    });
  }
  /**
   * backHandler - метод при нажатии на кнопку Back редиректит назад на страницу users
   */
  backHandler() {
    this.router.navigate(['/users']);
  }
  /**
   * navigateUserEdit - метод при нажатии на кнопку Edit редиректит на страницу usersedit/:id
   */
  navigateUserEdit() {
    this.router.navigate([`usersedit/${this.id}`]);
  }
}
