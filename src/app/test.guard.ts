import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor() {}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
      return of(true).pipe(delay(5000));
  }
}