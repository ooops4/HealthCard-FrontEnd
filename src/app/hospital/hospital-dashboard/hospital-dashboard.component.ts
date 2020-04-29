import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './hospital-dashboard.component.html',
  styleUrls: ['./hospital-dashboard.component.css']
})
export class HospitalDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  NewPatient(){
    this.router.navigateByUrl('/hospital/new-patient')
  }
    PatientList(){
      this.router.navigateByUrl('/hospital/patient-list')
    }
  ngOnInit(): void {
  }

}
