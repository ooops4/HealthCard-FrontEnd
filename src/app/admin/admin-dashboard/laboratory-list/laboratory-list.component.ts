import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory-list',
  templateUrl: './laboratory-list.component.html',
  styleUrls: ['./laboratory-list.component.css']
})
export class LaboratoryListComponent implements OnInit {

  laboratories:string
  searchText= this.laboratories


  constructor(private httpClient: HttpClient, private route: Router)  { }

  ngOnInit(): void {
    
    this.httpClient.get('http://127.0.0.1:5000/api/laboratory/laboratory-list').subscribe(users => (this.laboratories = users as string))
    console.log(this.laboratories)
  }


  
  NewLaboratory(){
    this.route.navigateByUrl('/admin/laboratory/add-laboratory')
  }
}
