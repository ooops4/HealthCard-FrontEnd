import { Component, OnInit } from '@angular/core';
import { HospitalTokenPayload, AuthenticationHospitalService } from './authentication-hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent{

  credentials: HospitalTokenPayload = {
    _id: '',
    hospital_name:'',
    first_name: '',
    last_name: '',
    email:'',
    password: '',
    gender: '',
    age: ''
  }

  constructor(private auth:AuthenticationHospitalService, private route:Router) { }
  login(){
    this.auth.login(this.credentials).subscribe(
    () => {
      this.route.navigateByUrl('/hospital/dashboard')
    },
    err =>
      console.error(err)
    )}}
