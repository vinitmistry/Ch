import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://192.168.1.163:3030'; 

  constructor(private http: HttpClient) { }

  loginUser(credentials: { employeeName: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth`, credentials);
  }

  registerUser(user: { department: string, employeeName: string, email: string ,password: string}): Observable<any> {
     console.log("Regi api hit")
    return this.http.post(`${this.baseUrl}/create-user`, user);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-details`);
  }
}
