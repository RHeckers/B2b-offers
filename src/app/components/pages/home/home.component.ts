import { IRequestListCard } from '../../../interfaces/IRequestListCard';
import { ITabsData } from './../../../interfaces/ITabsData';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tabs: ITabsData[];
  requests: any[];
  dataSizeClass = 'col-6 col-md-4 col-lg-3';

  constructor(private router: Router) { }

  ngOnInit() {
    this.requests = [
      {
        title: 'I want a cheaper phone bill',
        shortDescription: 'phone bill',
        unitPrice: 75,
        unitTargetPrice: 50,
        currentSupplier: 'T-mobile',
        totalValue: 600,
        _id: 1
      },
      {
        title: 'I want cheaper ensurance',
        shortDescription: 'Car ensurance',
        unitPrice: 100,
        unitTargetPrice: 80,
        currentSupplier: 'Inshared',
        totalValue: 960,
        _id: 2
      },
      {
        title: 'I want a cheaper internet connection',
        shortDescription: 'internet connection',
        unitPrice: 75,
        unitTargetPrice: 40,
        currentSupplier: 'T-mobile',
        totalValue: 480,
        _id: 3
      },
    ];
  }

  navigateToDetails(request: IRequestListCard) {
    this.router.navigate([`request-details/${request['_id']}`]);
  }

  navigateToMakeOffer(request: IRequestListCard) {
    this.router.navigate([`make-offer/${request['_id']}`]);
  }

}
