import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioaprepComponent } from './exercicioaprep.component';

describe('ExercicioaprepComponent', () => {
  let component: ExercicioaprepComponent;
  let fixture: ComponentFixture<ExercicioaprepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioaprepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioaprepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
