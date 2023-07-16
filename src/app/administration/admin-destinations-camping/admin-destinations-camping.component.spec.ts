import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDestinationsCampingComponent } from './admin-destinations-camping.component';

describe('AdminDestinationsCampingComponent', () => {
  let component: AdminDestinationsCampingComponent;
  let fixture: ComponentFixture<AdminDestinationsCampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDestinationsCampingComponent]
    });
    fixture = TestBed.createComponent(AdminDestinationsCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
