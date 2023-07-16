import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDestinationsNationalComponent } from './admin-destinations-national.component';

describe('AdminDestinationsNationalComponent', () => {
  let component: AdminDestinationsNationalComponent;
  let fixture: ComponentFixture<AdminDestinationsNationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDestinationsNationalComponent]
    });
    fixture = TestBed.createComponent(AdminDestinationsNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
