import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalNewCaseComponent } from './hospital-new-case.component';

describe('HospitalNewCaseComponent', () => {
  let component: HospitalNewCaseComponent;
  let fixture: ComponentFixture<HospitalNewCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalNewCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalNewCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
