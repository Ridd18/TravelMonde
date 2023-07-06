import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNationalComponent } from './view-national.component';

describe('ViewNationalComponent', () => {
  let component: ViewNationalComponent;
  let fixture: ComponentFixture<ViewNationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewNationalComponent]
    });
    fixture = TestBed.createComponent(ViewNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
