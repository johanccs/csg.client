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
import { ClassEntityService } from 'src/app/services/class-entity-service.service';
import { StoreService } from 'src/app/services/store-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ClassEntityService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
