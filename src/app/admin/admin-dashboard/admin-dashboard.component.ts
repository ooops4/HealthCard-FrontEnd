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
    this.router.navigateByUrl('/admin/users/users-list')
    
  }
  DoctorList(){
    this.router.navigateByUrl('/admin/doctor/doctor-list')
    
  }
  HospitalList(){
    this.router.navigateByUrl('/admin/hospital/hospital-list')
    
  }
  ClinicList(){
    this.router.navigateByUrl('/admin/clinic/clinic-list')
    
  }

  MedicalStoreList(){
    this.router.navigateByUrl('/admin/medical/medical-store-list')
    
  }

  ngOnInit(): void {
  }

}
