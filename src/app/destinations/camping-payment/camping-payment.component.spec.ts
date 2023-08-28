import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingPaymentComponent } from './camping-payment.component';

describe('CampingPaymentComponent', () => {
  let component: CampingPaymentComponent;
  let fixture: ComponentFixture<CampingPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampingPaymentComponent]
    });
    fixture = TestBed.createComponent(CampingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
