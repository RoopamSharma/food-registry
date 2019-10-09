import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHouseAdminComponent } from './update-house-admin.component';

describe('UpdateHouseAdminComponent', () => {
  let component: UpdateHouseAdminComponent;
  let fixture: ComponentFixture<UpdateHouseAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHouseAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHouseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
