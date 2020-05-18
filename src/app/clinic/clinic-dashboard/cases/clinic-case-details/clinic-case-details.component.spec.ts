import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicCaseDetailsComponent } from './clinic-case-details.component';

describe('CaseDetailsComponent', () => {
  let component: ClinicCaseDetailsComponent;
  let fixture: ComponentFixture<ClinicCaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicCaseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
