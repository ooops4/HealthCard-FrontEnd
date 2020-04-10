import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserDetails} from './user-details'
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  user_id: string;
  userDetails: UserDetails;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('userId')) {
        this.user_id = parameter.get('userId');
        console.log(this.user_id);
      }
    })
   }

  ngOnInit(){
    // this.getUserDetails();
  }

  // getUserDetails(){
  //   this.httpClient.get<UserDetails>(`http://127.0.0.1:5000/api/user/${this.user_id}`).subscribe(response => {
  //     console.log(response);
  //     this.userDetails = response;
  //   })
  //   console.log(this.userDetails);
  // }

}
