import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampFilesComponent } from './camp-files.component';

describe('CampFilesComponent', () => {
  let component: CampFilesComponent;
  let fixture: ComponentFixture<CampFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampFilesComponent]
    });
    fixture = TestBed.createComponent(CampFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
