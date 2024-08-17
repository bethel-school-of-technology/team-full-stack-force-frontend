import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = false;
  private loggedInUserId: number = 0;

  baseURL: string = "http://localhost:3000/api/auth" //this needs to be standardized at some point

  constructor(private http: HttpClient) { }

  signUp(newUser: User){
    return this.http.post(`${this.baseURL}/register`, newUser);

  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  

  login(email: string, password: string) {
    return this.http.post(`${this.baseURL}/login`,  { email, password})
      .pipe(tap((response: any) => {
        console.log(response);
        localStorage.setItem('myDevToken', response.token);
        this.setLoggedInUser(response.userId)
        console.log(response.userId)
        this.loggedIn = true;
      }));
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`)
  }
  setLoggedInUser(userId: number) {
    this.loggedInUserId = userId;
  }
  getLoggedInUserId() {
    return this.loggedInUserId;
  }
}
 