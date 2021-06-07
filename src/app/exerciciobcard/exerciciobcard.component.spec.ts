import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciobcardComponent } from './exerciciobcard.component';

describe('ExerciciobcardComponent', () => {
  let component: ExerciciobcardComponent;
  let fixture: ComponentFixture<ExerciciobcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciobcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciobcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
