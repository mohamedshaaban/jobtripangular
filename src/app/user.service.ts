import { Injectable } from '@angular/core';
import { http,HttpClient } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {
            
 }

  registerUser(user : User){
    const body: User = {
      name: user.name,
      password: user.password,
      confirmpassword: user.confirmpassword,
      email: user.email,
      FirstName: user.FirstName,
      LastName: user.LastName
    };

    return this.http.post(this.rootUrl + '/api/register', body);
  }
  loginUser(user : User){
    const body: User = {
      name: user.name,
      password: user.password,
    };

    return this.http.post(this.rootUrl + '/api/login', body);
  }
   getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/products');
  }
}