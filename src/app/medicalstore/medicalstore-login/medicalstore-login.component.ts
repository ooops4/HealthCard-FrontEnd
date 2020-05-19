import { Component, OnInit } from '@angular/core';
import { AuthenticationMedicalStoreService } from './authentication-medicalstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicalstore-login',
  templateUrl: './medicalstore-login.component.html',
  styleUrls: ['./medicalstore-login.component.css']
})
export class MedicalstoreLoginComponent {

  error: string;
  credentials = {
    email:'',
    password: ''
  }

 constructor(private auth:AuthenticationMedicalStoreService, private router: Router) { }
  login(){
    let user = {email: this.credentials.email, password: this.credentials.password}
    this.auth.login(user).subscribe(response => {
      if(response.token){
        this.auth.loginData(response);
        this.router.navigate(['/doctor/dashboard'])
      }
      else {
        this.error = response.result;
      }
    })
  }
}
