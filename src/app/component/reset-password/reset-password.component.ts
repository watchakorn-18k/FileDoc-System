import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'ต้องกรอกอีเมลด้วย';
    }

    return this.email.hasError('email') ? 'ไม่ใช่อีเมลที่ถูกต้อง' : '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
