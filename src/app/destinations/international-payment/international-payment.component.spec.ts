import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalPaymentComponent } from './international-payment.component';

describe('InternationalPaymentComponent', () => {
  let component: InternationalPaymentComponent;
  let fixture: ComponentFixture<InternationalPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalPaymentComponent]
    });
    fixture = TestBed.createComponent(InternationalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
