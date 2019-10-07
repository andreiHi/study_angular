import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from 'app/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    /**
     * Инжектим сервис
     * @param auth данный сервис позволяет получить узнать авторизован ли пользователь
     */
    constructor(private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean | UrlTree {
        return this.auth.isAuth().then((isLoggedIn: boolean) => {
            return isLoggedIn;
        });
    }

}
