import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  /**
   * logoutHandler - метод-хендлер очищает при клике на кнопку данный в localStorage
   * и редиректит на страницу login
   */
  logoutHandler() {
    localStorage.clear();
    this.router.navigate([`/login`]);
  }
}
