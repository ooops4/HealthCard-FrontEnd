import { Component } from '@angular/core';
import { AuthenticationClinicService } from './authentication-clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-login',
  templateUrl: './clinic-login.component.html',
  styleUrls: ['./clinic-login.component.css']
})
export class ClinicLoginComponent{

  error : string;
  credentials = {
    email:'',
    password: ''
  }
  constructor(private auth:AuthenticationClinicService, private router: Router) { }
  login(){
    let user = {email: this.credentials.email, password: this.credentials.password}
    this.auth.login(user).subscribe(response => {
      if(response.token){
      this.auth.loginData(response);
      this.router.navigate(['/clinic/dashboard'])
    }
    else {
      this.error = response.result;
    }
  })
}
}
