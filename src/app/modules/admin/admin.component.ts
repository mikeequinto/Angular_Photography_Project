import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  goToDashboard() {
    this.auth.test()
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/admin-login'])
            }
          }
        }
      );
  }

}
