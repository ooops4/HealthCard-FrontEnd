import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  users:string
  searchText= this.users


  constructor(private httpClient: HttpClient, private route: Router)  { }

  ngOnInit(): void {
    
    this.httpClient.get('http://127.0.0.1:5000/api/hospital/list').subscribe(users => (this.users = users as string))
    console.log(this.users)
  }

  getUsers():void{
    this.httpClient.get('http://127.0.0.1:5000/api/hospital/list').subscribe(users => (this.users = users as string))

  }



  NewHospital(){
    this.route.navigateByUrl('/admin/doctor/add-doctor')
  }
}