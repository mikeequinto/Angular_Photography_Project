import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { ForgotFormComponent } from './components/forgot-form/forgot-form.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    LoginPageComponent,
    LoginFormComponent,
    ForgotFormComponent,
    ErrorMessageComponent
  ],
})
export class LoginModule { }
