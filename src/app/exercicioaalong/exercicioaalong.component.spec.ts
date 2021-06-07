import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioaalongComponent } from './exercicioaalong.component';

describe('ExercicioaalongComponent', () => {
  let component: ExercicioaalongComponent;
  let fixture: ComponentFixture<ExercicioaalongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioaalongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioaalongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
