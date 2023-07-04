import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsNavComponent } from './destinations-nav.component';

describe('DestinationsNavComponent', () => {
  let component: DestinationsNavComponent;
  let fixture: ComponentFixture<DestinationsNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationsNavComponent]
    });
    fixture = TestBed.createComponent(DestinationsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
