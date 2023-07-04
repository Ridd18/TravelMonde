import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsHomeComponent } from './destinations-home.component';

describe('DestinationsHomeComponent', () => {
  let component: DestinationsHomeComponent;
  let fixture: ComponentFixture<DestinationsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationsHomeComponent]
    });
    fixture = TestBed.createComponent(DestinationsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
