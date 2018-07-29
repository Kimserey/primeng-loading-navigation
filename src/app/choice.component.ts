import { Component } from '@angular/core';

@Component({
  selector: 'app-choice',
  template: `
    <button class="ui-button-secondary align-self-center" type="button" pButton icon="fa fa-chevron-down" iconPos="right" label="Options"
      (click)="overlay.toggle($event)"></button>
    <p-overlayPanel appendTo="body" #overlay>
      <div>
        <div class="text-muted mb-2">Line Chart</div>
        <a href="#" class="d-block mb-1" (click)="$event.preventDefault(); changeDisplay('sum'); overlay.hide()" *ngIf="options.lineDisplay !== 'sum'">Combined</a>
        <div class="d-block" *ngIf="options.lineDisplay === 'sum'">Combined (current)</div>
        <a href="#" class="d-block" (click)="$event.preventDefault(); changeDisplay('category'); overlay.hide()" *ngIf="options.lineDisplay !== 'category'">Separated</a>
        <div class="d-block" *ngIf="options.lineDisplay === 'category'">Separated (current)</div>
      </div>
    </p-overlayPanel>
  `
})
export class ChoiceComponent { }