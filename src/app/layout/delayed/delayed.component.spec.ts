import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedComponent } from './delayed.component';

describe('DelayedComponent', () => {
  let component: DelayedComponent;
  let fixture: ComponentFixture<DelayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
