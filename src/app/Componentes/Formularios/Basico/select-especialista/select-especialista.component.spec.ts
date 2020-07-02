import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEspecialistaComponent } from './select-especialista.component';

describe('SelectEspecialistaComponent', () => {
  let component: SelectEspecialistaComponent;
  let fixture: ComponentFixture<SelectEspecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEspecialistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
