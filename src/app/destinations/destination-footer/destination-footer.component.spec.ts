import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationFooterComponent } from './destination-footer.component';

describe('DestinationFooterComponent', () => {
  let component: DestinationFooterComponent;
  let fixture: ComponentFixture<DestinationFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationFooterComponent]
    });
    fixture = TestBed.createComponent(DestinationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
