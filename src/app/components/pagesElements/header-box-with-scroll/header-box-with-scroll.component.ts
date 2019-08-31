import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-box-with-scroll',
  templateUrl: './header-box-with-scroll.component.html',
  styleUrls: ['./header-box-with-scroll.component.scss']
})
export class HeaderBoxWithScrollComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
