import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { FooterNavComponent } from './nav/footer-nav/footer-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { DailyAttendanceHomeComponent } from './daily-attendance-home/daily-attendance-home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    FooterNavComponent,
    DailyAttendanceHomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
