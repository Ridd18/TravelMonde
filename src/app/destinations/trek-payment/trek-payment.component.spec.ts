import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekPaymentComponent } from './trek-payment.component';

describe('TrekPaymentComponent', () => {
  let component: TrekPaymentComponent;
  let fixture: ComponentFixture<TrekPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrekPaymentComponent]
    });
    fixture = TestBed.createComponent(TrekPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
