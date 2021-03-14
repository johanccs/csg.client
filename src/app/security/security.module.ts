import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginHomeComponent } from './login-home/login-home.component';
import { ToastModule } from 'primeng/toast';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [LoginHomeComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ToastModule,
    MDBBootstrapModule,

  ]
})
export class SecurityModule { }
