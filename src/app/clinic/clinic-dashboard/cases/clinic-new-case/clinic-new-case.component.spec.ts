import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicNewCaseComponent } from './clinic-new-case.component';

describe('NewCaseComponent', () => {
  let component: ClinicNewCaseComponent;
  let fixture: ComponentFixture<ClinicNewCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicNewCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicNewCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
