import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide=true;
  rehide=true;
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
