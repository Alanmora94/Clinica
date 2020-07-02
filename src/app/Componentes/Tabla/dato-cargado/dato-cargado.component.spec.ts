import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoCargadoComponent } from './dato-cargado.component';

describe('DatoCargadoComponent', () => {
  let component: DatoCargadoComponent;
  let fixture: ComponentFixture<DatoCargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatoCargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoCargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
