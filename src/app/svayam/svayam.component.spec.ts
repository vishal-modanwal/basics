import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvayamComponent } from './svayam.component';

describe('SvayamComponent', () => {
  let component: SvayamComponent;
  let fixture: ComponentFixture<SvayamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvayamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvayamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
