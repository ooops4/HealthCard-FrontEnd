import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-new-patient',
  templateUrl: './hospital-new-patient.component.html',
  styleUrls: ['./hospital-new-patient.component.css']
})
export class HospitalNewPatientComponent implements OnInit {
  patientID:'';

  constructor() { }

  ngOnInit(): void {
  }

}
