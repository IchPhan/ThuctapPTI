import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuiderComponent } from './form-buider.component';

describe('FormBuiderComponent', () => {
  let component: FormBuiderComponent;
  let fixture: ComponentFixture<FormBuiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
