import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalFilesComponent } from './international-files.component';

describe('InternationalFilesComponent', () => {
  let component: InternationalFilesComponent;
  let fixture: ComponentFixture<InternationalFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalFilesComponent]
    });
    fixture = TestBed.createComponent(InternationalFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
