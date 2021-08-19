import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  loginComponent: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  switchForm(): void {
    this.loginComponent = !this.loginComponent
  }

}
