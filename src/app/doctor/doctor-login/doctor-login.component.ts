import { Component, OnInit } from '@angular/core';
import { AuthenticationDoctorService, DoctorTokenPayload } from './authentication-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent{

  
  credentials: DoctorTokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email:'',
    password: '',
    gender: '',
    age: ''
  }

  constructor(private auth:AuthenticationDoctorService, private route:Router) { }
  login(){
    this.auth.login(this.credentials).subscribe(
    () => {
      this.route.navigateByUrl('/doctor/dashboard')
    },
    err =>
      console.error(err)
    )}}
