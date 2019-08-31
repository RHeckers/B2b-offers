import * as EnumsValues from '../../../../assets/enums/selectEnums';
import { IFormQuestion } from '../../../interfaces/IFormQuestion';
import { IRequestListCard } from '../../../interfaces/IRequestListCard';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestsListComponent implements OnInit {

  @ViewChild('filterScreen') filterScreen;
  @ViewChild('sortScreen') sortScreen;

  @Input() requests: IRequestListCard[];
  @Input() includeFilters: boolean;
  @Input() dataSizeClass = 'col-12 col-sm-12 col-md-6';

  @Output() showDetailsOutput = new EventEmitter<IRequestListCard>();
  @Output() makeOfferOutput = new EventEmitter<IRequestListCard>();

  filterFormQustions: IFormQuestion[];

  constructor() { }

  ngOnInit() {
    this.filterFormQustions = [
      {
        label: 'Filter by category',
        bindTo: 'check2',
        questionType: 'select',
        selectOptionsEnum: EnumsValues.categoryOptionsEnglish,
        labelColSize: 'col-12 col-md-4',
        inputColSize: 'col-12 col-md-8',
        // inputType: 'checkbox',
        validators: {}
      },
      {
        label: 'Favorites only',
        bindTo: 'check',
        questionType: 'input',
        inputType: 'checkbox',
        validators: {}
      },
      {
        label: 'Only request with request',
        bindTo: 'check3',
        questionType: 'input',
        inputType: 'checkbox',
        validators: {}
      },
      {
        label: 'Only request without request',
        bindTo: 'check4',
        questionType: 'input',
        inputType: 'checkbox',
        validators: {}
      }
    ];
  }

  toggleFilterScreen(htmlElem: HTMLElement, filter) {
    filter ? this.filterScreen.nativeElement.classList.remove('showScreen') : this.sortScreen.nativeElement.classList.remove('showScreen');
    htmlElem.classList.toggle('showScreen');
  }

  makeOfferInput(request: IRequestListCard) {
    this.makeOfferOutput.next(request);
  }

  showDetailsInput(request: IRequestListCard) {
    this.showDetailsOutput.next(request);
  }

}
