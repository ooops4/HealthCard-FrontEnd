import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNewCaseComponent } from './doctor-new-case.component';

describe('NewCaseComponent', () => {
  let component: DoctorNewCaseComponent;
  let fixture: ComponentFixture<DoctorNewCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorNewCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorNewCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
