import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicPatientDetailsComponent } from './clinic-patient-details.component';

describe('PatientDetailsComponent', () => {
  let component: ClinicPatientDetailsComponent;
  let fixture: ComponentFixture<ClinicPatientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicPatientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
