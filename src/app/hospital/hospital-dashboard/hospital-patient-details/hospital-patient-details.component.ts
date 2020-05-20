import { Component, OnInit } from '@angular/core';
import { HospitalPatientDetails } from './hospital-patient-details';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hospital-patient-details',
  templateUrl: './hospital-patient-details.component.html',
  styleUrls: ['./hospital-patient-details.component.css']
})
export class HospitalPatientDetailsComponent implements OnInit {
  patientID: string;
  patientDetails: HospitalPatientDetails;



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
    this.httpClient.get<HospitalPatientDetails>(`http://127.0.0.1:5000/api/user/${this.patientID}`).subscribe(response => {
      // console.log(response);
      // console.log(this.patientDetails)
      this.patientDetails = response;
    })
    // console.log(this.patientDetails);
  }

  
  NewCase(){
    this.route.navigateByUrl(`hospital/patient-details/new-case/${this.patientID}`)
  }

  ViewCases(){
    this.route.navigateByUrl(`hospital/patient-details/view-cases/${this.patientID}`)
  }

}
