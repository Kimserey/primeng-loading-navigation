import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="loading$ | async">
        <p-progressBar mode="indeterminate" [style]="{'height': '6px'}"></p-progressBar>
    </div>
    <h1>App component</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
    loading$ = this.router.events.pipe(
        filter(evt => evt instanceof NavigationStart || evt instanceof NavigationEnd),
        map(evt => evt instanceof NavigationStart)
    );

    constructor(private router: Router) { }
}