import { Component, OnInit } from '@angular/core';
import { AuthenticationDoctorService } from './authentication-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent{

  
  credentials = {
    email:'',
    password: ''
  }

  constructor(private auth:AuthenticationDoctorService, private router: Router) { }
  login(){
    let user = {email: this.credentials.email, password: this.credentials.password}
    this.auth.login(user).subscribe(response => {
      this.auth.loginData(response);
      this.router.navigate(['/doctor/dashboard'])
    })
  }
}
