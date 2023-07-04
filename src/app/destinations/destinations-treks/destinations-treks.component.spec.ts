import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsTreksComponent } from './destinations-treks.component';

describe('DestinationsTreksComponent', () => {
  let component: DestinationsTreksComponent;
  let fixture: ComponentFixture<DestinationsTreksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationsTreksComponent]
    });
    fixture = TestBed.createComponent(DestinationsTreksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
