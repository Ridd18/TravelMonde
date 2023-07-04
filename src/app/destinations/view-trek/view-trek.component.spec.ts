import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrekComponent } from './view-trek.component';

describe('ViewTrekComponent', () => {
  let component: ViewTrekComponent;
  let fixture: ComponentFixture<ViewTrekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTrekComponent]
    });
    fixture = TestBed.createComponent(ViewTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
