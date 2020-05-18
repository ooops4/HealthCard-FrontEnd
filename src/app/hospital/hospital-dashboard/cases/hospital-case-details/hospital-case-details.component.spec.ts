import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCaseDetailsComponent } from './hospital-case-details.component';

describe('HospitalCaseDetailsComponent', () => {
  let component: HospitalCaseDetailsComponent;
  let fixture: ComponentFixture<HospitalCaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalCaseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
