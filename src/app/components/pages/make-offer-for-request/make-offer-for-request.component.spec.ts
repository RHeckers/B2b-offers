import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeOfferForRequestComponent } from './make-offer-for-request.component';

describe('MakeOfferForRequestComponent', () => {
  let component: MakeOfferForRequestComponent;
  let fixture: ComponentFixture<MakeOfferForRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeOfferForRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeOfferForRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
