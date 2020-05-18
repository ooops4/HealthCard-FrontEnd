import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CaseDetails } from './CaseDetails';

@Component({
  selector: 'app-hospital-case-details',
  templateUrl: './doctor-case-details.component.html',
  styleUrls: ['./doctor-case-details.component.css']
})
export class DoctorCaseDetailsComponent implements OnInit {

  caseID:string
  caseDetails: any

 

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router:Router)  { 
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('caseID')) {
        this.caseID = parameter.get('caseID');
        // console.log(this.patientID);
      }
    })
   }


  ngOnInit() {
    this.getCaseDetails();


  }

  getCaseDetails(){


    this.httpClient.get<CaseDetails>(`http://127.0.0.1:5000/api/user/cases/case-details/${this.caseID}`).subscribe(response => {
      this.caseDetails = response;
    console.log(this.caseDetails);
    console.log(response)
  });
}
}
