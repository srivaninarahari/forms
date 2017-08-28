import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
   
    myform: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    /*this.myform = new FormGroup({
      firstName : new  FormControl('sree',[Validators.required]),
      lastName : new FormControl('chavan')
    });*/
   this.myform=this.fb.group(
     {
       'firstName':['',Validators.compose([Validators.required,Validators.minLength(2)])],
       'lastName':['',Validators.required]
     }
   );
  }

}
