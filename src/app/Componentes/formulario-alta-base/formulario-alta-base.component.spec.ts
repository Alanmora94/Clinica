import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAltaBaseComponent } from './formulario-alta-base.component';

describe('FormularioAltaBaseComponent', () => {
  let component: FormularioAltaBaseComponent;
  let fixture: ComponentFixture<FormularioAltaBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAltaBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAltaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
