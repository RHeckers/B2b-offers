import { IFormQuestion } from './../interfaces/IFormQuestion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  addDisabledForDisplayForm(formQuestion: IFormQuestion[]) {
    formQuestion.forEach(question => {
      if (question['questionType'] === 'select') { question['disabled'] = true; }
      if (question['inputType'] === 'checkbox') { question['disabled'] = true; }
    });
  }
}
