import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsInternationalComponent } from './destinations-international.component';

describe('DestinationsInternationalComponent', () => {
  let component: DestinationsInternationalComponent;
  let fixture: ComponentFixture<DestinationsInternationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationsInternationalComponent]
    });
    fixture = TestBed.createComponent(DestinationsInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
