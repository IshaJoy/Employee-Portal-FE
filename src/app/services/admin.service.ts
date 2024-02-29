import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 SERVER_URL:string='https://employee-portal-1.onrender.com'

  constructor(private http:HttpClient) { }
  
 getAdminDetails(){
   return this.http.get(`${this.SERVER_URL}/users/1`)

  }

  updateAdminAPI(adminDetails:any){
    return this.http.put(`${this.SERVER_URL}/users/1`,adminDetails)

  }

  isLoggedIn(){
    // !! converting to boolean
    return !!sessionStorage.getItem("adminDetails")
  }
}