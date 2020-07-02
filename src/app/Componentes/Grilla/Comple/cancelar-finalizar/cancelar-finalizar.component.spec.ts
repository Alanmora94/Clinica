import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarFinalizarComponent } from './cancelar-finalizar.component';

describe('CancelarFinalizarComponent', () => {
  let component: CancelarFinalizarComponent;
  let fixture: ComponentFixture<CancelarFinalizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelarFinalizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
