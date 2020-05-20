import { Component, OnInit } from '@angular/core';
import { PatientDetails } from 'src/app/doctor/doctor-dashboard/doctor-patient-details/doctor-patient-details';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './clinic-patient-details.component.html',
  styleUrls: ['./clinic-patient-details.component.css']
})
export class ClinicPatientDetailsComponent implements OnInit {
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
    this.route.navigateByUrl(`clinic/patient-details/new-case/${this.patientID}`)
  }

  ViewCases(){
    this.route.navigateByUrl(`clinic/patient-details/view-cases/${this.patientID}`)
  }

}
