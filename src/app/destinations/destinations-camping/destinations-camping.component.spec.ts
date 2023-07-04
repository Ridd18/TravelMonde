import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsCampingComponent } from './destinations-camping.component';

describe('DestinationsCampingComponent', () => {
  let component: DestinationsCampingComponent;
  let fixture: ComponentFixture<DestinationsCampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationsCampingComponent]
    });
    fixture = TestBed.createComponent(DestinationsCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
