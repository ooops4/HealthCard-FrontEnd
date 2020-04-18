import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryListComponent } from './laboratory-list.component';

describe('LaboratoryListComponent', () => {
  let component: LaboratoryListComponent;
  let fixture: ComponentFixture<LaboratoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
