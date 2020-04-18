import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  constructor( private router:Router) { }

  UsersList(){
    this.router.navigateByUrl('/users-list')
    
  }
  DoctorList(){
    this.router.navigateByUrl('/doctor-list')
    
  }
  HospitalList(){
    this.router.navigateByUrl('/hospital-list')
    
  }
  ClinicList(){
    this.router.navigateByUrl('/clinic-list')
    
  }

  MedicalStoreList(){
    this.router.navigateByUrl('/medical-store-list')
    
  }

  ngOnInit(): void {
  }

}
