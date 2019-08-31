import { IFormQuestion } from 'src/app/interfaces/IFormQuestion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormQuestions: IFormQuestion[];

  constructor() { }

  ngOnInit() {
    this.loginFormQuestions = [
      {
        label: 'username',
        bindTo: 'username',
        questionType: 'input',
        inputType: 'text',
        validators: { required: true, minLength: 4},
        errorMessage: 'Must be atleast 4 characters'
      },
      {
        label: 'password',
        bindTo: 'password',
        questionType: 'input',
        inputType: 'password',
        validators: { required: true, password: true},
        errorMessage: 'password must be between 5 and 20 character long and contain atleast 1 number'
      }
    ];
  }

  loginFormSubmited(e) {
    console.log(e);
  }

}
