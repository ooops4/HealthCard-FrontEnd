import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStoreDetailsComponent } from './medical-store-details.component';

describe('MedicalStoreDetailsComponent', () => {
  let component: MedicalStoreDetailsComponent;
  let fixture: ComponentFixture<MedicalStoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
