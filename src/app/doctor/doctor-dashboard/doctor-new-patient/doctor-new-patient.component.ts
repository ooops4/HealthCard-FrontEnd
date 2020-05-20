import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-new-patient',
  templateUrl: './doctor-new-patient.component.html',
  styleUrls: ['./doctor-new-patient.component.css']
})
export class DoctorNewPatientComponent implements OnInit {
  patientID:'';


  constructor() { }

  ngOnInit(): void {
  }

}
