import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksrecordComponent } from './tasksrecord.component';

describe('TasksrecordComponent', () => {
  let component: TasksrecordComponent;
  let fixture: ComponentFixture<TasksrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
