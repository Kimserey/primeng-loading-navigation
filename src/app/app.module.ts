import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { AppComponent } from './app.component';
import { OverlayComponent } from './overlay.component';
import { TestComponent } from './test.component';
import { TestGuard } from './test.guard';

const appRoutes: Routes = [
  { 
    path: '', 
    component: OverlayComponent 
  },
  { 
    path: 'test', 
    component: TestComponent,
    canActivate: [
      TestGuard
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    OverlayPanelModule,
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
