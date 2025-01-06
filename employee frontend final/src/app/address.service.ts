import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  // Correct the baseURL to match the correct endpoint for creating addresses
  private baseURL = "http://localhost:6060/api/address";  // Base URL for the API

  constructor(private httpClient: HttpClient) { }
  
  // Fetch all addresses
  getAdressesList(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(`${this.baseURL}/getAll`);
  }

  // Add a new address
  addAddress(address: Address): Observable<any> {
    const urlWithCreate = `${this.baseURL}/create`;  // Full URL for creating an address
    return this.httpClient.post(urlWithCreate, address);  // Send the POST request with the address data
  }

  // Get an address by ID
  getAddressById(id: number): Observable<Address> {
    return this.httpClient.get<Address>(`${this.baseURL}/${id}`);
  }

  // Update an address
  updateAddress(id: number, address: Address): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, address);
  }

  // Delete an address
  deleteAddress(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
