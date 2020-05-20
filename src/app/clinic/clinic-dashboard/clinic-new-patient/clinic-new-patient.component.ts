import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  templateUrl: './clinic-new-patient.component.html',
  styleUrls: ['./clinic-new-patient.component.css']
})
export class ClinicNewPatientComponent implements OnInit {
  patientID:'';

  constructor( private router:Router) { }

  FindPatient(){
    this.router.navigateByUrl('/clinic/new-patient')
  }


  ngOnInit(): void {
  }

}
