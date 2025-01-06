import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddresseComponent } from './add-address.component';

describe('AddAddressComponent', () => {
  let component: AddAddresseComponent;
  let fixture: ComponentFixture<AddAddresseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAddresseComponent]
    });
    fixture = TestBed.createComponent(AddAddresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
