import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Logger } from '../logger.service';
import { AuthenticationService } from './authentication.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return this.authenticationService.user
           .take(1)
           .map(user => !!user)
           .do(loggedIn => {
             if (!loggedIn) {
               console.log('access denied')
               this.router.navigate(['/login']);
             }
         });
  }

  // constructor(private router: Router,
  //             private authenticationService: AuthenticationService) { }
  // canActivate(): boolean {
  //   if (this.authenticationService.isAuthenticated()) {
  //     return true;
  //   }

  //   log.debug('Not authenticated, redirecting...');
  //   this.router.navigate(['/login'], { replaceUrl: true });
  //   return false;
  // }

}
