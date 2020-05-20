import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { counts } from './counts';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  // counts;
  counts: any;

  
  constructor( private router:Router, private httpClient: HttpClient) { }

  ngOnInit() {
      this.httpClient.get<counts>(`http://127.0.0.1:5000/api/count`).subscribe(response => {
        console.log(response);
        this.counts = response;
      })
      console.log(this.counts);
    }

   
  



  UserList(){
    this.router.navigateByUrl('/admin/user/users-list')
    
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
  LaboratoryList(){
    this.router.navigateByUrl('/admin/laboratory/laboratory-list')
    
  }

 
}
