import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientDetailsComponent } from './doctor-patient-details.component';

describe('PatientDetailsComponent', () => {
  let component: DoctorPatientDetailsComponent;
  let fixture: ComponentFixture<DoctorPatientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPatientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
