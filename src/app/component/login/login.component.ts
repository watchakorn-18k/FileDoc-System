import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  U_username:string = "";
  P_password:string = "";
  hide=true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'ต้องกรอกอีเมลด้วย';
    }
    return this.email.hasError('email') ? 'ไม่ใช่อีเมลที่ถูกต้อง' : '';
  }
  OnClickSunmit(){
    if (this.U_username=="1@a.a" && this.P_password=="1234") {
      alert("ยินดีต้อนรับ");
    }
    else{
      alert("ข้อมูลผิด");
    }
  }


}
