import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciobprepComponent } from './exerciciobprep.component';

describe('ExerciciobprepComponent', () => {
  let component: ExerciciobprepComponent;
  let fixture: ComponentFixture<ExerciciobprepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciobprepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciobprepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
