import { Component, Input } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-progress-bar',
  template: `
    <p-progressBar mode="indeterminate" *ngIf="show$ | async"></p-progressBar>
  `,
  styles: [`
    :host {
        position: fixed;
        width: 100%;
        z-index: 10;
    }`, `
    :host ::ng-deep .ui-progressbar {
        height: 3px;
        background: #c5c5c5;
    }`, `
    :host ::ng-deep .ui-widget-header {
        border: none;
    }`, `
    :host ::ng-deep .ui-widget-content {
        border: none;
    }`, `
    :host ::ng-deep .ui-corner-all {
        border-radius: 0;
    }
    `
  ]
})
export class ProgressBarComponent { 
    show$ = this.router.events.pipe(
        filter(evt => evt instanceof NavigationStart || evt instanceof NavigationEnd),
        map(evt => evt instanceof NavigationStart)
    );

    constructor(private router: Router) { }
}