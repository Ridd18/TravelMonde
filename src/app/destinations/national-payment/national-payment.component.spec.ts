import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalPaymentComponent } from './national-payment.component';

describe('NationalPaymentComponent', () => {
  let component: NationalPaymentComponent;
  let fixture: ComponentFixture<NationalPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalPaymentComponent]
    });
    fixture = TestBed.createComponent(NationalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
