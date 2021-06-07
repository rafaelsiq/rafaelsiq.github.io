import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichbContentsComponent } from './fichb-contents.component';

describe('FichbContentsComponent', () => {
  let component: FichbContentsComponent;
  let fixture: ComponentFixture<FichbContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichbContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichbContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
