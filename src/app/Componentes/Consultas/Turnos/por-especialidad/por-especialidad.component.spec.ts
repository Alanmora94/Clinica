import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorEspecialidadComponent } from './por-especialidad.component';

describe('PorEspecialidadComponent', () => {
  let component: PorEspecialidadComponent;
  let fixture: ComponentFixture<PorEspecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorEspecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
