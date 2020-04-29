import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalNewPatientComponent } from './hospital-new-patient.component';

describe('HospitalNewPatientComponent', () => {
  let component: HospitalNewPatientComponent;
  let fixture: ComponentFixture<HospitalNewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalNewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalNewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
