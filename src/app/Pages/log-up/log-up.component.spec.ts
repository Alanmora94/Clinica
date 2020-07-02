import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUpComponent } from './log-up.component';

describe('LogUpComponent', () => {
  let component: LogUpComponent;
  let fixture: ComponentFixture<LogUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
