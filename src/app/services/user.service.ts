import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:3000/api" //this needs to be standardized at some point

  constructor(private http: HttpClient) { }

  signUp(newUser: User){
    return this.http.post(`${this.baseURL}/auth/register`, newUser);

  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseURL}/auth/login`,  { email, password})
      .pipe(tap((response: any) => {
        localStorage.setItem('myDevToken', response);
      }));
  }
}
 