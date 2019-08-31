import { ITabsData } from './../../../interfaces/ITabsData';
import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @ContentChild(TemplateRef) templateRef;
  @Input() items: ITabsData[];
  @Input() tabPositioning: string;

  @Output() tabClickedOutput = new EventEmitter();

  activeRoute: string = this.location.path();

  constructor(private location: Location) { }

  ngOnInit() {
  }

  tabClicked(e, clickedTab) {
    const outputValues = {
      e,
      clickedTab
    };
    this.tabClickedOutput.next(outputValues);
  }

}
