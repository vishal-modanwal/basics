import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetinputComponent } from './setinput.component';

describe('SetinputComponent', () => {
  let component: SetinputComponent;
  let fixture: ComponentFixture<SetinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
