import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DoctorDetails } from 'src/app/doctor/doctor-login/authentication-doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  doctor_id: string;
  doctorDetails : any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('doctor_id')) {
        this.doctor_id = parameter.get('doctor_id');
        console.log(this.doctor_id);
      }
    })
   }



  ngOnInit() {
    this.getClinicDetails();

  }

  getClinicDetails(){
    this.httpClient.get<DoctorDetails>(`http://127.0.0.1:5000/api/doctor/${this.doctor_id}`).subscribe(response => {
      console.log(response);
      // console.log(this.userDetails)
      this.doctorDetails = response;
      console.log(typeof this.doctorDetails.dob)
    })
    console.log(this.doctorDetails);
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
