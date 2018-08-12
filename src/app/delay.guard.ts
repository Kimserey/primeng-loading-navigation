import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { delay } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DelayGuard implements CanActivate, CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return of(true).pipe(delay(5000));
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return of(true).pipe(delay(5000));
  }
}