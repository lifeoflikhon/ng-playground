import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfProcessComponent } from './wf-process.component';

describe('WfProcessComponent', () => {
  let component: WfProcessComponent;
  let fixture: ComponentFixture<WfProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
