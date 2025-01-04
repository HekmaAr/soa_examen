import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Address } from './address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {


 
  private baseURL = "http://localhost:6060/api/address/getAll";

  constructor(private httpClient: HttpClient) { }
  
  getAdressesList(): Observable<Address[]>{
    return this.httpClient.get<Address[]>(`${this.baseURL}`);
  }

  addAddress(address: Address): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, address);
  }

  getAddressById(id: number): Observable<Address>{
    return this.httpClient.get<Address>(`${this.baseURL}/${id}`);
  }


  updateAddress(id: number, address: Address): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, address);
  }

  deleteAddress(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
