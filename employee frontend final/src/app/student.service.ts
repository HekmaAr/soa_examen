import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // Correct the baseURL to match the correct endpoint for creating students
  private baseURL = "http://localhost:8082/api/student";  // Base URL for the API

  constructor(private httpClient: HttpClient) { }
  
  // Fetch all students
  getStudentsList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseURL}/getAllStudent`);
  }

  // Add a new student
  addStudent(student: Student): Observable<Object> {
    const urlWithCreate = `${this.baseURL}/create`;  // Full URL for creating a student
    return this.httpClient.post(urlWithCreate, student);  // Send the POST request with the student data
  }

  // Get a student by ID
  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  // Update a student
  updateStudent(id: number, student: Student): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }

  // Delete a student
  deleteStudent(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
