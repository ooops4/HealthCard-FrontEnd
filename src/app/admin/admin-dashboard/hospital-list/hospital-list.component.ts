import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitals:string
  searchText= this.hospitals


  constructor(private httpClient: HttpClient, private route: Router)  { }

  ngOnInit(): void {
    
    this.httpClient.get('http://127.0.0.1:5000/api/hospital/list').subscribe(users => (this.hospitals = users as string))
    console.log(this.hospitals)
  }





  NewHospital(){
    this.route.navigateByUrl('/admin/hospital/add-hospital')
  }
}