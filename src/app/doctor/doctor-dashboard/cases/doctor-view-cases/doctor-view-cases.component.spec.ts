import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewCasesComponent } from './doctor-view-cases.component';

describe('ViewCasesComponent', () => {
  let component: DoctorViewCasesComponent;
  let fixture: ComponentFixture<DoctorViewCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorViewCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
