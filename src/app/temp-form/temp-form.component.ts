import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrl: './temp-form.component.css'
})
export class TempFormComponent {

  @ViewChild('myForm') form: any;

  fName: string= '';

  onFormSubmit(){
    console.log(this.form);

    console.log(this.form.value.firstName);
    
    console.log(this.form.controls.firstName);
    
    
  }
}
