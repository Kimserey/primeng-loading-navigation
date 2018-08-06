import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { TestService } from "./test.service";
import { map, delay } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor(private service: TestService) {}
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return of(true).pipe(delay(5000));
  }
}