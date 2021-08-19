import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

import { ApiPaths } from 'src/enums/api-paths';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl + ApiPaths.Login, user)
  }

  test(): Observable<any> {
    return this.http.get<any>(this.baseUrl + ApiPaths.Test)
  }

  loggedIn(): boolean {
    // true if token exists
    return !!localStorage.getItem('token')
  }

  getToken(): string {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin-login']);
  }

}
