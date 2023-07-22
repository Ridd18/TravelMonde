import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackHomeComponent } from './feedback-home.component';

describe('FeedbackHomeComponent', () => {
  let component: FeedbackHomeComponent;
  let fixture: ComponentFixture<FeedbackHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackHomeComponent]
    });
    fixture = TestBed.createComponent(FeedbackHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
