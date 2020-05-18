import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCaseDetailsComponent } from './doctor-case-details.component';

describe('CaseDetailsComponent', () => {
  let component: DoctorCaseDetailsComponent;
  let fixture: ComponentFixture<DoctorCaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorCaseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
