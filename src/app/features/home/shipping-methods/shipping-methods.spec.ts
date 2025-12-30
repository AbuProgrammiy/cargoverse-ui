import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingMethods } from './shipping-methods';

describe('ShippingMethods', () => {
  let component: ShippingMethods;
  let fixture: ComponentFixture<ShippingMethods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingMethods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingMethods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
