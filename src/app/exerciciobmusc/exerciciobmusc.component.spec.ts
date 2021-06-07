import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciobmuscComponent } from './exerciciobmusc.component';

describe('ExerciciobmuscComponent', () => {
  let component: ExerciciobmuscComponent;
  let fixture: ComponentFixture<ExerciciobmuscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciobmuscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciobmuscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
