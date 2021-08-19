import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../http/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if(!this.auth.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/admin'])
      return false
    }
  }
  
}
