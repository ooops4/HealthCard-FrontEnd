import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryLoginComponent } from './laboratory-login.component';

describe('LaboratoryLoginComponent', () => {
  let component: LaboratoryLoginComponent;
  let fixture: ComponentFixture<LaboratoryLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
