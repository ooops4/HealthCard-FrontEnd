import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryDetailsComponent } from './laboratory-details.component';

describe('LaboratoryDetailsComponent', () => {
  let component: LaboratoryDetailsComponent;
  let fixture: ComponentFixture<LaboratoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
