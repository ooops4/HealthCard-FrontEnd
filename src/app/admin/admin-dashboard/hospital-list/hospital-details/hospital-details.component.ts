import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { HospitalDetails } from 'src/app/hospital/hospital-login/authentication-hospital.service';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {

  hospital_id: string;
  hospitalDetails : any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('hospital_id')) {
        this.hospital_id = parameter.get('hospital_id');
        console.log(this.hospital_id);
      }
    })
   }



  ngOnInit() {
    this.gethospitalDetails();

  }

  gethospitalDetails(){
    this.httpClient.get<HospitalDetails>(`http://127.0.0.1:5000/api/hospital/${this.hospital_id}`).subscribe(response => {
      console.log(response);
      // console.log(this.userDetails)
      this.hospitalDetails = response;
      console.log(typeof this.hospitalDetails.dob)
    })
    console.log(this.hospitalDetails);
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
