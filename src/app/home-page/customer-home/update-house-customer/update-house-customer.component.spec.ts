import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHouseCustomerComponent } from './update-house-customer.component';

describe('UpdateHouseCustomerComponent', () => {
  let component: UpdateHouseCustomerComponent;
  let fixture: ComponentFixture<UpdateHouseCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHouseCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHouseCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
