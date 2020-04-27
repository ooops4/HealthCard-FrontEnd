import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  users:string
  searchText= this.users


  constructor(private httpClient: HttpClient, private route: Router)  { }

  ngOnInit(): void {
    
    this.httpClient.get('http://127.0.0.1:5000/api/doctor/user').subscribe(users => (this.users = users as string))
    console.log(this.users)
  }

  getUsers():void{
    this.httpClient.get('http://127.0.0.1:5000/api/doctor/user').subscribe(users => (this.users = users as string))

  }



  NewDoctor(){
    this.route.navigateByUrl('/admin/doctor/add-doctor')
  }
}
