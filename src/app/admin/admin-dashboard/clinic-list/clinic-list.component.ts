import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit {

  clinics;
  searchText= this.clinics

  constructor(private httpClient: HttpClient, private route: Router)  { }
  
  
  ngOnInit() {

    this.httpClient.get('http://127.0.0.1:5000/api/clinics/clinic-list').subscribe(users => (this.clinics = users))
    console.log(this.clinics)

   
  }

  NewClinic(){
    this.route.navigateByUrl('/admin/clinic/add-clinic')
  }
    
}

