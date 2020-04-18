import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStoreListComponent } from './medical-store-list.component';

describe('MedicalStoreListComponent', () => {
  let component: MedicalStoreListComponent;
  let fixture: ComponentFixture<MedicalStoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
