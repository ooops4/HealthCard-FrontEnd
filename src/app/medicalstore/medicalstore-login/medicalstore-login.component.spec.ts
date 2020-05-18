import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalstoreLoginComponent } from './medicalstore-login.component';

describe('MedicalstoreLoginComponent', () => {
  let component: MedicalstoreLoginComponent;
  let fixture: ComponentFixture<MedicalstoreLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalstoreLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalstoreLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
