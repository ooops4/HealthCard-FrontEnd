import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalstoreDashboardComponent } from './medicalstore-dashboard.component';

describe('MedicalstoreDashboardComponent', () => {
  let component: MedicalstoreDashboardComponent;
  let fixture: ComponentFixture<MedicalstoreDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalstoreDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalstoreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
