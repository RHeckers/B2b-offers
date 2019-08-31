import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IFormQuestion } from 'src/app/interfaces/IFormQuestion';
import { IFormSection } from 'src/app/interfaces/IFormSections';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormQuestions: IFormQuestion[];
  registerFormSections: IFormSection[];
  bindObj = {
    receiveNewsletter: true,
    check: false
  };

  constructor() { }

  ngOnInit() {
    this.registerFormSections = [
      {
        title: 'personal',
        // sectionWidth: 'col-sm-12'
      },
      {
        title: 'company',
        // sectionWidth: 'col-sm-12'
      },
      {
        title: 'profile',
        sectionWidth: 'col-sm-12',
        labelColSize: 'col-sm-2',
        inputColSize: 'col-sm-10'
      },
    ];
    this.registerFormQuestions = [
      {
        label: 'username',
        bindTo: 'username',
        questionType: 'input',
        inputType: 'text',
        section: 'profile',
        validators: { required: true, minLength: 4},
        errorMessage: 'Must be atleast 4 characters'
      },
      {
        label: 'email',
        bindTo: 'email',
        questionType: 'input',
        inputType: 'email',
        section: 'profile',
        validators: { required: true, email: true },
        errorMessage: 'please submit a valid email address'
      },
      {
        label: 'password',
        bindTo: 'password',
        questionType: 'input',
        inputType: 'password',
        section: 'profile',
        validators: { required: true, password: true},
        errorMessage: 'password must be between 5 and 20 character long and contain atleast 1 number'
      },
      {
        label: 'confirm password',
        bindTo: 'password2',
        questionType: 'input',
        inputType: 'password',
        section: 'profile',
        validators: { required: true, MatchWith: 'password'},
        errorMessage: 'seems like it does not match with your password'
      },
      {
        label: 'I agree with the terms & conditions',
        bindTo: 'check',
        questionType: 'input',
        inputType: 'checkbox',
        fineprintCheckbox: true,
        finreprintRoute: 'terms-conditions',
        textForFineprintLink: 'Terms & Conditions',
        section: 'profile',
        validators: { required: true}
      },
    ];
  }

  regstirFormSubmited(e) {
    const formValues = e.bindObj;
    console.log('Register form values =>', formValues);
  }
}
