import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses: Address[] = [];  // Initialize the addresses array
  EnteredID!: number;

  constructor(private addressService: AddressService, private router: Router) {}

  ngOnInit(): void {
    // Fetch addresses from the service
    this.getAddresses();
  }

  // Navigate to the details page of a student (you might want to adjust this logic if needed)
  goToEmployee(): void {
    console.log(this.EnteredID); 
    this.router.navigate(['details-of-student', this.EnteredID]);
  }

  // Fetch the addresses from the service
  getAddresses(): void {
    this.addressService.getAdressesList().subscribe(data => {
      this.addresses = data;  // Assign the fetched data to the addresses array
    }, error => {
      console.error('Error fetching addresses:', error);  // Log any errors that occur
    });
  }

  // Navigate to the update page for a specific address
  updateAddress(id: number): void {
    this.router.navigate(['updating-by-id', id]);
  }

  // Delete a specific address and refresh the address list
  deleteAddress(id: number): void {
    if (confirm(`Are you sure you want to delete Address ID: ${id}?`)) {
      this.addressService.deleteAddress(id).subscribe(data => {
        console.log(data);
        this.getAddresses();  // Refresh the address list after deletion
      }, error => {
        console.error('Error deleting address:', error);  // Log any errors that occur
      });
    }
  }

  // Navigate to the details page for a specific address
  detailsOfAddress(id: number): void {
    this.router.navigate(['details-of-address', id]);
  }
}
