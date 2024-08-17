import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  email: string = '';
  password: string = '';
 
  constructor(private userService: UserService, private router: Router) { }
 
 
  signin(){
    this.userService.login(this.email, this.password).subscribe((response:any) => {
        this.router.navigateByUrl('/projects');
    }, error => {
        console.log('Error: ', error);
        window.alert('Unsuccessful Login');
        this.router.navigateByUrl('/login');
    });
  }
 }