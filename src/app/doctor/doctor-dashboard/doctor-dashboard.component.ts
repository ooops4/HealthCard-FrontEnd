import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  NewPatient(){
    this.router.navigateByUrl('/doctor/new-patient')
  }
    PatientList(){
      this.router.navigateByUrl('/doctor/patient-list')
    }
  ngOnInit(): void {
  }

}
