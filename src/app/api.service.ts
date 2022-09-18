import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public userReports(){
   return this.http.get("https://gorest.co.in/public/v2/users");
  }
}
