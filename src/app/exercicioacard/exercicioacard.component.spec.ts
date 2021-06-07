import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioacardComponent } from './exercicioacard.component';

describe('ExercicioacardComponent', () => {
  let component: ExercicioacardComponent;
  let fixture: ComponentFixture<ExercicioacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioacardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
