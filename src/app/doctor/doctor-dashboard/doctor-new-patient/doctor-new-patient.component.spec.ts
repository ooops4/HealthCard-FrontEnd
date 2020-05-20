import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNewPatientComponent } from './doctor-new-patient.component';

describe('DoctorNewPatientComponent', () => {
  let component: DoctorNewPatientComponent;
  let fixture: ComponentFixture<DoctorNewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorNewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorNewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
