import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicNewPatientComponent } from './clinic-new-patient.component';

describe('NewPatientComponent', () => {
  let component: ClinicNewPatientComponent;
  let fixture: ComponentFixture<ClinicNewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicNewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicNewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
