import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-doc-receiver',
  templateUrl: './doc-receiver.component.html',
  styleUrls: ['./doc-receiver.component.scss']
})
export class DocReceiverComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  selected = 'option2';
  time =  new Date().toLocaleTimeString();
  today = new Date().toLocaleDateString();
  pdfInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
  allInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
  success_doc(){
   alert('สำเร็จนะจ๊ะ');
    
  }
  
 
  constructor(private _formBuilder: FormBuilder) { 
    const selected = 'option2';
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    
    
    
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
  }
  

}

