import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppComponent } from './app.component';
import { OverlayComponent } from './overlay.component';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';
import { DelayGuard } from './delay.guard';
import { ProgressBarComponent } from './progress-bar.component';
import { MyComponent } from './my.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MyComponent,
    canActivate: [
      DelayGuard
    ]
  },
  {
    path: 'one',
    component: Test1Component
  },
  {
    path: 'two',
    component: Test2Component,
    canActivate: [
      DelayGuard
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    Test1Component,
    Test2Component,
    ProgressBarComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    OverlayPanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ToggleButtonModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
