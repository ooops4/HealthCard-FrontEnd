import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-dashboard',
  templateUrl: './clinic-dashboard.component.html',
  styleUrls: ['./clinic-dashboard.component.css']
})
export class ClinicDashboardComponent implements OnInit {


  constructor(private router:Router) { }

  
  NewPatient(){
    this.router.navigateByUrl('/clinic/new-patient')
  }
    PatientList(){
      this.router.navigateByUrl('/clinic/patient-list')
    }
  ngOnInit(): void {
  }

}
