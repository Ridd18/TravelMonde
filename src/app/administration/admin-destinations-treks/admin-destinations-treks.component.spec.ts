import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDestinationsTreksComponent } from './admin-destinations-treks.component';

describe('AdminDestinationsTreksComponent', () => {
  let component: AdminDestinationsTreksComponent;
  let fixture: ComponentFixture<AdminDestinationsTreksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDestinationsTreksComponent]
    });
    fixture = TestBed.createComponent(AdminDestinationsTreksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
