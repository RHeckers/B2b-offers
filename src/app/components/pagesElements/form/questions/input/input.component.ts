import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { IFormQuestion } from 'src/app/interfaces/IFormQuestion';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() bindObj: any;
  @Input() question: IFormQuestion;
  @Input() blockDesign: boolean;
  @Input() displayForm: boolean;
  @Input() labelColSize: string;
  @Input() inputColSize: string;
  @Input() fineprintCheckbox: boolean;

  constructor() { }

  ngOnInit() {
  }

  bindCheckboxValue(checkboxElem) {
    const status = checkboxElem.checked;
    this.form.controls[this.question.bindTo].setValue(status);
    this.bindObj[this.question.bindTo] = status;
  }

  bindValue() {
    this.bindObj[this.question.bindTo] = this.form.controls[this.question.bindTo].value;
  }

}
