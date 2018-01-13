import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksapprovalComponent } from './tasksapproval.component';

describe('TasksapprovalComponent', () => {
  let component: TasksapprovalComponent;
  let fixture: ComponentFixture<TasksapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
