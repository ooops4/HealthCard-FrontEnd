import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViewCasesComponent } from './hospital-view-cases.component';

describe('HospitalViewCasesComponent', () => {
  let component: HospitalViewCasesComponent;
  let fixture: ComponentFixture<HospitalViewCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalViewCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalViewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
