import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoConsultaComponent } from './turno-consulta.component';

describe('TurnoConsultaComponent', () => {
  let component: TurnoConsultaComponent;
  let fixture: ComponentFixture<TurnoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
