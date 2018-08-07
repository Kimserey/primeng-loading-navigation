import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <p-progressBar mode="{{mode}}"></p-progressBar>
  `,
  styles: [`
    :host ::ng-deep .ui-progressbar {
        height: 4px;
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
    @Input() mode: string;
}