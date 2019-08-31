import { IRequestListCard } from '../../../interfaces/IRequestListCard';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-request-list-card',
  templateUrl: './request-list-card.component.html',
  styleUrls: ['./request-list-card.component.scss']
})
export class RequestListCardComponent implements OnInit {

  @Input() request: IRequestListCard;
  @Input() dataSizeClass: string;

  @Output() makeOfferOutput = new EventEmitter<IRequestListCard>();
  @Output() showDetailsOutput = new EventEmitter<IRequestListCard>();

  constructor() { }

  ngOnInit() {
  }

  makeAnOfferClicked() {
    this.makeOfferOutput.next(this.request);
  }

  moreDetailsClicked() {
    console.log(this.request);
    this.showDetailsOutput.next(this.request);
  }

}
