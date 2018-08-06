import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TestService {
    loading$ = new Subject<boolean>();
    
    load() {
        this.loading$.next(true);

        setTimeout(() => {
            this.loading$.next(false);
        }, 5000);
    }
}