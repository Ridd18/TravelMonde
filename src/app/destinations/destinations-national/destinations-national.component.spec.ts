import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsNationalComponent } from './destinations-national.component';

describe('DestinationsNationalComponent', () => {
  let component: DestinationsNationalComponent;
  let fixture: ComponentFixture<DestinationsNationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationsNationalComponent]
    });
    fixture = TestBed.createComponent(DestinationsNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
