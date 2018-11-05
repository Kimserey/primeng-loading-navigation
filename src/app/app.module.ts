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
import { BadgeListComponent } from './badge-list.component';
import { DelayGuard } from './delay.guard';
import { ProgressBarComponent } from './progress-bar.component';
import { NavComponent } from './nav.component';
import { ContentComponent } from './content.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: BadgeListComponent
    },{
      path: 'delay',
      component: ContentComponent,
      canActivate: [
        DelayGuard
      ]
    }]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    NavComponent,
    ContentComponent,
    BadgeListComponent
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
