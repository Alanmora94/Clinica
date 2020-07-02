import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFechaComponent } from './select-fecha.component';

describe('SelectFechaComponent', () => {
  let component: SelectFechaComponent;
  let fixture: ComponentFixture<SelectFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
