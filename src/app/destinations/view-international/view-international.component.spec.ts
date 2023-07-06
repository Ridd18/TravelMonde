import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInternationalComponent } from './view-international.component';

describe('ViewInternationalComponent', () => {
  let component: ViewInternationalComponent;
  let fixture: ComponentFixture<ViewInternationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInternationalComponent]
    });
    fixture = TestBed.createComponent(ViewInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
