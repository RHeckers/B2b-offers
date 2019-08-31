import { GlobalService } from './../../../../../services/global.service';
import { IFormQuestion } from './../../../../../interfaces/IFormQuestion';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() bindObj: any;
  @Input() question: IFormQuestion;
  @Input() blockDesign: boolean;
  @Input() labelColSize: string;
  @Input() inputColSize: string;
  @Input() displayForm = false;

  @Input() set selectOptionsEnum(value: any) {
    this.selectOptions = this.globalService.mapEnumValuesToArray(value);
  }

  selectOptions: any;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }

  selectionMade(elem) {
    // tslint:disable-next-line: radix
    const value = parseInt(elem.value);
    this.bindObj[this.question.bindTo] = value;
    this.form.controls[this.question.bindTo].setValue(value);
  }

}
