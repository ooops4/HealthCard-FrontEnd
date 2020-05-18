import { Component, OnInit } from '@angular/core';
import { PatientDetails } from './doctor-patient-details';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './doctor-patient-details.component.html',
  styleUrls: ['./doctor-patient-details.component.css']
})
export class DoctorPatientDetailsComponent implements OnInit {
  patientID: string;
  patientDetails: PatientDetails;



  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private route:Router) {
    this.activatedRoute.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('patientID')) {
        this.patientID = parameter.get('patientID');
        console.log(this.patientID);
      }
    })
   }

  ngOnInit(){
   
    this.getUserDetails();

  }
  

  getUserDetails(){
    this.httpClient.get<PatientDetails>(`http://127.0.0.1:5000/api/user/${this.patientID}`).subscribe(response => {
      // console.log(response);
      // console.log(this.patientDetails)
      this.patientDetails = response;
    })
    // console.log(this.patientDetails);
  }

  
  NewCase(){
    this.route.navigateByUrl(`doctor/patient-details/new-case/${this.patientID}`)
  }

  ViewCases(){
    this.route.navigateByUrl(`doctor/patient-details/view-cases/${this.patientID}`)
  }

}
