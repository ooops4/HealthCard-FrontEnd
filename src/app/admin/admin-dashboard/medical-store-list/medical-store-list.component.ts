import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-store-list',
  templateUrl: './medical-store-list.component.html',
  styleUrls: ['./medical-store-list.component.css']
})
export class MedicalStoreListComponent implements OnInit {

  medicalstores:string
  searchText= this.medicalstores


  constructor(private httpClient: HttpClient, private route: Router)  { }

  ngOnInit(): void {
    
    this.httpClient.get('http://127.0.0.1:5000/api/medical/list').subscribe(users => (this.medicalstores = users as string))
    console.log(this.medicalstores)
  }


  
  NewMedicalStore(){
    this.route.navigateByUrl('/admin/medical/add-medical')
  }
}
