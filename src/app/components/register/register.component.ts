import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  newUser: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  signUp() {
    this.userService.signUp(this.newUser).subscribe(() => {
        window.alert("User Registered Successfully");
        this.router.navigate(['signin']);
    }, error => {
        window.alert("User Registration Error");
        console.log('Error: ', error)
    });
  }

}
