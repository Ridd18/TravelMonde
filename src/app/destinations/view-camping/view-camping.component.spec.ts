import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampingComponent } from './view-camping.component';

describe('ViewCampingComponent', () => {
  let component: ViewCampingComponent;
  let fixture: ComponentFixture<ViewCampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCampingComponent]
    });
    fixture = TestBed.createComponent(ViewCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
