import { IFormSection } from './../../../interfaces/IFormSections';
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IFormQuestion } from 'src/app/interfaces/IFormQuestion';
import { ValidatePassword } from 'src/app/customValidators/password.validator';
import { MatchWith } from 'src/app/customValidators/matchWith.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  @Input() bindObj: any;
  @Input() noBindObj: boolean;
  @Input() blockDesign: boolean;
  @Input() questions: IFormQuestion[];
  @Input() formSections: IFormSection[];
  @Input() hideDefaultBtn: boolean;
  @Input() displayForm: boolean;
  @Input() buttonPositioning: string;
  @Input() sameHeightsSideBySide = true;
  @Input() labelColSize = 'col-sm-2';
  @Input() inputColSize = 'col-sm-10';
  @Input() btnText = 'SUBMIT';

  @Output() formToParent = new EventEmitter<FormGroup>();
  @Output() formSubmited = new EventEmitter<any>();
  @Output() formValuesChanges = new EventEmitter<any>();

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = this.questionDataToFormGroup(this.questions, this.bindObj);
    this.formToParent.next(this.form);
    console.log(this.form);
  }

  ngAfterViewInit(): void {
    this.setSectionHeights();
  }

  setSectionHeights() {
    if (this.sameHeightsSideBySide) {
      const sections = document.querySelectorAll('.formSection');
      for (let i = 0; i < sections.length; i++) {
        if (i % 2 !== 0) {
          const section = sections[i] as HTMLElement;
          const prevSection = sections[i - 1] as HTMLElement;

          const sectionHeight = section.clientHeight;
          const prevSectionHeight = prevSection.clientHeight;

          if (sectionHeight > prevSectionHeight) {
            prevSection.style.height = sectionHeight + 'px';
          } else if (prevSectionHeight > sectionHeight) {
            section.style.height = sectionHeight + 'px';
          }
        }
      }
    }
  }

  // Convert questions data into a valid formgroup
  questionDataToFormGroup(questions: IFormQuestion[], bindObj) {
    // Create empty object to map the FormControl in
    const group: any = {};

    // Loop over the questions and add the FormControls as configured in the question obj
    questions.forEach(question => {
      const validators = [];
      // Add validators to validators array
      if (question.validators.required) { validators.push(Validators.required); }
      if (question.validators.min) { validators.push(Validators.min(question.validators.min)); }
      if (question.validators.max) { validators.push(Validators.max(question.validators.max)); }
      // if (question.validators.requiredTrue) { validators.push(Validators.requiredTrue); }
      if (question.validators.minLength) { validators.push(Validators.minLength(question.validators.minLength)); }
      if (question.validators.maxLength) { validators.push(Validators.maxLength(question.validators.maxLength)); }
      if (question.validators.pattern) { validators.push(Validators.pattern(question.validators.pattern)); }
      if (question.validators.email) { validators.push(Validators.email); }
      if (question.validators.password) { validators.push(ValidatePassword); }
      if (question.validators.MatchWith) { validators.push(MatchWith); }


      console.log(question.disabled);
      // Create formgroup
      group[question.bindTo] =
        new FormControl(bindObj[question.bindTo] ?
          {value: bindObj[question.bindTo], disabled: question.disabled ? true : false } :
          {value: '', disabled: question.disabled ? true : false },
          validators ? validators : {});

      if (question.validators.MatchWith) { group[question.bindTo]['matchWith'] = question.validators.MatchWith; }
    });
    return new FormGroup(group);
  }

  formSubmit() {
    const outputObj = {
      form: this.form,
      bindObj: this.bindObj
    };

    this.formSubmited.next(outputObj);
  }

  formChanged() {
    const outputObj = {
      formValues: this.form.value,
      bindObj: this.bindObj,
      form: this.form
    };
    this.formValuesChanges.next(outputObj);
  }

}
