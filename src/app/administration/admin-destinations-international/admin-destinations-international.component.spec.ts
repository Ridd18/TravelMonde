import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDestinationsInternationalComponent } from './admin-destinations-international.component';

describe('AdminDestinationsInternationalComponent', () => {
  let component: AdminDestinationsInternationalComponent;
  let fixture: ComponentFixture<AdminDestinationsInternationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDestinationsInternationalComponent]
    });
    fixture = TestBed.createComponent(AdminDestinationsInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
