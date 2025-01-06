import { Component } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddresseComponent {
  student: any;
  private baseURL = "http://localhost:6060/api/address";  // Base URL for the API
  address: Address = new Address();  // Initialize the Address object

  constructor(
    private addressService: AddressService,
    private router: Router
  ) {}

  // Method to save the address
  saveAddress() {
    const urlWithCreate = `${this.baseURL}/create`;  // Append '/create' to the baseURL
    this.addressService.addAddress(this.address).subscribe(
      data => {
        console.log(data);  // Log the response
        this.goToAddressList();  // Navigate to the address list after success
      },
      error => console.log(error)  // Log any errors
    );
  }

  // Navigate to the address list page
  goToAddressList() {
    this.router.navigate(['/show-all-address']);
  }

  ngOnInit(): void {}

  // Handle form submission
  onSubmit() {
    console.log(this.address);  // Log the address data
    this.saveAddress();  // Call saveAddress when form is submitted
  }
}
