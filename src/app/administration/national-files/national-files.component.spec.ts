import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalFilesComponent } from './national-files.component';

describe('NationalFilesComponent', () => {
  let component: NationalFilesComponent;
  let fixture: ComponentFixture<NationalFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalFilesComponent]
    });
    fixture = TestBed.createComponent(NationalFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
