import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { TestService } from "./test.service";
import { delay } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DelayGuard implements CanActivate {
  constructor(private service: TestService) {}
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return of(true).pipe(delay(5000));
  }
}