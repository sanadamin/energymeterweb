import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcemapComponent } from './forcemap.component';

describe('ForcemapComponent', () => {
  let component: ForcemapComponent;
  let fixture: ComponentFixture<ForcemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
