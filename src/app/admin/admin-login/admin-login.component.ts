import { Component } from '@angular/core';
import { AuthenticationAdminService, AdminTokenPayload } from './authentication-admin.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  credentials: AdminTokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email:'',
    password: '',
    gender: '',
    age: ''
  }
  constructor(private auth: AuthenticationAdminService, private route:Router) { }
  login(){
    this.auth.login(this.credentials).subscribe(
    () => {
      this.route.navigateByUrl('/admin/dashboard')
    },
    err =>
      console.error(err)
    )}}
    

