import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    mode$ = this.router.events.pipe(
        filter(evt => evt instanceof NavigationStart || evt instanceof NavigationEnd),
        map(evt => evt instanceof NavigationStart ? 'indeterminate' : '')
    );

    constructor(private router: Router) { }
}