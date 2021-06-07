import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioamuscComponent } from './exercicioamusc.component';

describe('ExercicioamuscComponent', () => {
  let component: ExercicioamuscComponent;
  let fixture: ComponentFixture<ExercicioamuscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioamuscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioamuscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
