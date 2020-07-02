import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMGComponent } from './img.component';

describe('IMGComponent', () => {
  let component: IMGComponent;
  let fixture: ComponentFixture<IMGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
