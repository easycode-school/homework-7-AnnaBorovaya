import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  /**
   * @param route ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   * canActivate - метода запускающий Guard при активации маршрутизации
   * в Guard проверяется пользователь на наличие Login, то есть записаны ли данные в LocalStorage
   * если не залогинен то возвращается false и редирект перкрашается и пользователь остается на месте
   * если залогинен то пользователь переходит куда ему нужно
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isAuth()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
