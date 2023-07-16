import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDestinationsNavComponent } from './admin-destinations-nav.component';

describe('AdminDestinationsNavComponent', () => {
  let component: AdminDestinationsNavComponent;
  let fixture: ComponentFixture<AdminDestinationsNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDestinationsNavComponent]
    });
    fixture = TestBed.createComponent(AdminDestinationsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
