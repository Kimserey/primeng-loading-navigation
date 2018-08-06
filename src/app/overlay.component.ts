import { Component } from '@angular/core';

@Component({
  template: `
    <p-toggleButton onLabel="on" offLabel="off" [(ngModel)]="display"></p-toggleButton>
    <div *ngIf="display">
      <button class="ui-button-secondary align-self-center" type="button" pButton label="Options" (click)="overlay.toggle($event)"></button>
      <p-overlayPanel #overlay>
        <div>
          Hello world
        </div>
      </p-overlayPanel>
    </div>
  `
})
export class OverlayComponent {
  display = false;
}