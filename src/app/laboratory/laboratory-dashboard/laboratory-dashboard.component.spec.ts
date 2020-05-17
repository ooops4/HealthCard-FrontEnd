import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryDashboardComponent } from './laboratory-dashboard.component';

describe('LaboratoryDashboardComponent', () => {
  let component: LaboratoryDashboardComponent;
  let fixture: ComponentFixture<LaboratoryDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
