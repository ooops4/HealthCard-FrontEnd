import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MedicalDetails } from 'src/app/medicalstore/medicalstore-login/authentication-medicalstore.service';

@Component({
  selector: 'app-medical-store-details',
  templateUrl: './medical-store-details.component.html',
  styleUrls: ['./medical-store-details.component.css']
})
export class MedicalStoreDetailsComponent implements OnInit {
  medical_id: string;
  medicalDetails : any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('medical_id')) {
        this.medical_id = parameter.get('medical_id');
        console.log(this.medical_id);
      }
    })
   }



  ngOnInit() {
    this.getMedicalDetails();

  }

  getMedicalDetails(){
    this.httpClient.get<MedicalDetails>(`http://127.0.0.1:5000/api/medical/${this.medical_id}`).subscribe(response => {
      console.log(response);
      // console.log(this.userDetails)
      this.medicalDetails = response;
      console.log(typeof this.medicalDetails.dob)
    })
    console.log(this.medicalDetails);
  }

  // textLayerRendered(e: CustomEvent) {
  //   let externalLinks: HTMLCollectionOf<HTMLAnchorElement>;
  //   const pdfReport = document.getElementById('pdf-report-id');

  //   if (pdfReport) {
  //     externalLinks = pdfReport.getElementsByTagName('a');
  //   }
  //   for (let i = 0; i < externalLinks.length; i++) { externalLinks[i].setAttribute('target', '_blank'); }
  // }

}
