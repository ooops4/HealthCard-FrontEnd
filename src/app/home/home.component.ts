import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  UserLogin(){
    this.router.navigateByUrl('user/login')
  }

  DoctorLogin(){
    this.router.navigateByUrl('doctor/login')
  }

  HospitalLogin(){
    this.router.navigateByUrl('hospital/login')
  }

  LaboratoryLogin(){
    this.router.navigateByUrl('laboratory/login')
  }

  MedicalStoreLogin(){
    this.router.navigateByUrl('medical/login')
  }

  ClinicLogin(){
    this.router.navigateByUrl('clinic/login')
  }


  ngOnInit(): void {
  }

}
