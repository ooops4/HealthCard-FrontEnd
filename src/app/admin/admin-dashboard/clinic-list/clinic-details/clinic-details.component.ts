import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ClinicDetails } from 'src/app/clinic/clinic-login/authentication-clinic.service';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css']
})
export class ClinicDetailsComponent implements OnInit {

  clinic_id: string;
  clinicDetails : any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('clinic_id')) {
        this.clinic_id = parameter.get('clinic_id');
        console.log(this.clinic_id);
      }
    })
   }



  ngOnInit() {
    this.getClinicDetails();

  }

  getClinicDetails(){
    this.httpClient.get<ClinicDetails>(`http://127.0.0.1:5000/api/clinic/${this.clinic_id}`).subscribe(response => {
      console.log(response);
      // console.log(this.userDetails)
      this.clinicDetails = response;
      console.log(typeof this.clinicDetails.dob)
    })
    console.log(this.clinicDetails);
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
