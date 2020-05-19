import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  error: string;

  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email:'',
    password: ''
  }
  constructor(private auth: AuthenticationService, private route:Router) { }
  login(){
    this.auth.login(this.credentials).subscribe(response => {
      if(response.token){
        this.route.navigate(['/user/profile'])
      }
      else {
        this.error = response.result;
      }
    })
  }
}

