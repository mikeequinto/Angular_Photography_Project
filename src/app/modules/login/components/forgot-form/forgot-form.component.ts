import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forgot-form',
  templateUrl: './forgot-form.component.html',
  styleUrls: ['./forgot-form.component.scss']
})
export class ForgotFormComponent implements OnInit {

  // Parent function --> switchForm
  @Output() parentFun = new EventEmitter<any>()

  user = {
    email: ""
  }

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.parentFun.emit()
  }

  resetPassword() {

  }

}
