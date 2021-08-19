import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/auth/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  // Parent function --> switchForm
  @Output() parentFun = new EventEmitter<any>()

  user: User = {
    email: '',
    password: ''
  }

  loginError: boolean = false

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {

    this.loginError = false

    this.auth.login(this.user)
      .subscribe(
        res => {
          // Set JWT token
          localStorage.setItem('token', res.token)
          // Navigate to admin page
          this.router.navigate(['/admin/dashboard'])
        },
        err => {
          this.loginError = true
        }
      );
  }

  onClick() {
    this.parentFun.emit();
  }

}
