import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBoxWithScrollComponent } from './header-box-with-scroll.component';

describe('HeaderBoxWithScrollComponent', () => {
  let component: HeaderBoxWithScrollComponent;
  let fixture: ComponentFixture<HeaderBoxWithScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBoxWithScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBoxWithScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
