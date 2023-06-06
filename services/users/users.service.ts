import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  link ='http://localhost:3000'
  constructor(private http:HttpClient) { }

  saveUser(user:any){
   return this.http.post('http://localhost:3000/user/addUser',user)
  }
  getAllUsers(){
    return this.http.get('http://localhost:3000/user/allUsers')
  }
  loginUser(user:any){
    return this.http.post('http://localhost:3000/user/verifyUser',user)
  }
}
