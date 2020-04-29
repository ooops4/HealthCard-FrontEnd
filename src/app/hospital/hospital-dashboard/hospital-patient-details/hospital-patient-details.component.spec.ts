import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalPatientDetailsComponent } from './hospital-patient-details.component';

describe('HospitalPatientDetailsComponent', () => {
  let component: HospitalPatientDetailsComponent;
  let fixture: ComponentFixture<HospitalPatientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalPatientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
