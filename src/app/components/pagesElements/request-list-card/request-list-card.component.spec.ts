import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListCardComponent } from './request-list-card.component';

describe('RequestListCardComponent', () => {
  let component: RequestListCardComponent;
  let fixture: ComponentFixture<RequestListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
