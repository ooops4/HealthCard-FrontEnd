import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicViewCasesComponent } from './clinic-view-cases.component';

describe('ViewCasesComponent', () => {
  let component: ClinicViewCasesComponent;
  let fixture: ComponentFixture<ClinicViewCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicViewCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicViewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
