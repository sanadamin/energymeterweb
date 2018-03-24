import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcontrolComponent } from './taskcontrol.component';

describe('TaskcontrolComponent', () => {
  let component: TaskcontrolComponent;
  let fixture: ComponentFixture<TaskcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
