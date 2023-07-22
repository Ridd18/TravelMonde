import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekFilesComponent } from './trek-files.component';

describe('TrekFilesComponent', () => {
  let component: TrekFilesComponent;
  let fixture: ComponentFixture<TrekFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrekFilesComponent]
    });
    fixture = TestBed.createComponent(TrekFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
