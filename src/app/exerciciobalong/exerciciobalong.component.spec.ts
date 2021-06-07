import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciobalongComponent } from './exerciciobalong.component';

describe('ExerciciobalongComponent', () => {
  let component: ExerciciobalongComponent;
  let fixture: ComponentFixture<ExerciciobalongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciobalongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciobalongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
