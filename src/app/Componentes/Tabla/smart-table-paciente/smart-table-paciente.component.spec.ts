import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTablePacienteComponent } from './smart-table-paciente.component';

describe('SmartTablePacienteComponent', () => {
  let component: SmartTablePacienteComponent;
  let fixture: ComponentFixture<SmartTablePacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartTablePacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTablePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
