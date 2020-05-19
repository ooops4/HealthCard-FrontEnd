import { Component } from '@angular/core';
import { AuthenticationLaboratoryService } from './authentication-Laboratory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory-login',
  templateUrl: './laboratory-login.component.html',
  styleUrls: ['./laboratory-login.component.css']
})
export class LaboratoryLoginComponent{
  
  error: string;
  credentials = {
    email:'',
    password: ''
  }


  constructor(private auth:AuthenticationLaboratoryService, private router: Router) { }
  login(){
    let user = {email: this.credentials.email, password: this.credentials.password}
    this.auth.login(user).subscribe(response => {
      if(response.token){
        this.auth.loginData(response);
        this.router.navigate(['/laboratory/dashboard'])
      }
      else {
        this.error = response.result;
      }
    })
  }
  }
  