import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  doctors:string
  searchText= this.doctors


  constructor(private httpClient: HttpClient, private route: Router)  { }

  ngOnInit(): void {
    
    this.httpClient.get('http://127.0.0.1:5000/api/doctor/doctor-list').subscribe(users => (this.doctors = users as string))
    console.log(this.doctors)
  }




  NewDoctor(){
    this.route.navigateByUrl('/admin/doctor/add-doctor')
  }
}
