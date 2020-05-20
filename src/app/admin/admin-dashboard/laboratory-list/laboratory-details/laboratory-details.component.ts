import { Component, OnInit } from '@angular/core';
import { LaboratoryDetails } from 'src/app/laboratory/laboratory-login/authentication-Laboratory.service';
import { HttpClient } from '@angular/common/http';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laboratory-details',
  templateUrl: './laboratory-details.component.html',
  styleUrls: ['./laboratory-details.component.css']
})
export class LaboratoryDetailsComponent implements OnInit {
  laboratory_id: string;
  laboratoryDetails : any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('laboratory_id')) {
        this.laboratory_id = parameter.get('laboratory_id');
        console.log(this.laboratory_id);
      }
    })
   }



  ngOnInit() {
    this.getLaboratoryDetails();

  }

  getLaboratoryDetails(){
    this.httpClient.get<LaboratoryDetails>(`http://127.0.0.1:5000/api/laboratory/${this.laboratory_id}`).subscribe(response => {
      console.log(response);
      // console.log(this.userDetails)
      this.laboratoryDetails = response;
      console.log(typeof this.laboratoryDetails.dob)
    })
    console.log(this.laboratoryDetails);
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
