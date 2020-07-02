import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTurnosComponent } from './form-turnos.component';

describe('FormTurnosComponent', () => {
  let component: FormTurnosComponent;
  let fixture: ComponentFixture<FormTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
