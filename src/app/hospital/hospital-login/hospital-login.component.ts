import { Component, OnInit } from '@angular/core';
import {  AuthenticationHospitalService } from './authentication-hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent{

  credentials = {
    email:'',
    password: ''
  }

  constructor(private auth:AuthenticationHospitalService, private router: Router) { }
  login(){
    let user = {email: this.credentials.email, password: this.credentials.password}
    this.auth.login(user).subscribe(response => {
      this.auth.loginData(response);
      this.router.navigate(['/hospital/dashboard'])
    })
  }
}
