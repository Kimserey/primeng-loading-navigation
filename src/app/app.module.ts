import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressBarModule } from 'primeng/progressbar';

import { AppComponent } from './app.component';
import { OverlayComponent } from './overlay.component';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';
import { TestGuard } from './test.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: OverlayComponent
  },
  {
    path: 'one',
    component: Test1Component
  },
  {
    path: 'two',
    component: Test2Component,
    canActivate: [
      TestGuard
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    OverlayPanelModule,
    ProgressBarModule,
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
