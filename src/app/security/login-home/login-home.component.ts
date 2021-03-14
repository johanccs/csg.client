import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss'],
  providers: [MessageService]
})
export class LoginHomeComponent implements OnInit {

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }

  success(detail) {
    this.messageService.add({
      key: 'tl', sticky: true, severity: 'success',
      summary: 'Server Message', detail
    });
  }

  error(detail) {
    this.messageService.add(
      {
        key: 'tl', sticky: false, severity: 'error',
        summary: 'An unexpected error occurred', detail
      });
  }

  login() {

    this.success('User logged in successfully. Navigating to home. Please wait...');

    setTimeout(() => {
      this.router.navigate(['home']);
    }, 2000);
  }

}
