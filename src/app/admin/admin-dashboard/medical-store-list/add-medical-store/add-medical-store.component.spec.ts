import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalStoreComponent } from './add-medical-store.component';

describe('AddMedicalStoreComponent', () => {
  let component: AddMedicalStoreComponent;
  let fixture: ComponentFixture<AddMedicalStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicalStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
