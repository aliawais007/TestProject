import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { user } from '../../user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User: user;
  message: string;
  isNotLogin: boolean=false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  Login(email,password):void{
    this.userService.Ulogin(email,password).subscribe((User:any)=>{
      localStorage.setItem("user",User.email);
      this.router.navigate(["/home"]);
      this.User=User;
    });
    if(!this.User)
      this.isNotLogin=true;
      this.message="Not a User";
  }

}
