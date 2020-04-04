import { Component, OnInit } from '@angular/core';
import {User} from './users'
import {UserServices} from './user.service'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserServices],
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  users: JSON
  editUser: JSON

  constructor(private httpClient: HttpClient){}


  ngOnInit(){
    this.httpClient.get('http://127.0.0.1:5000/api/users').subscribe(users => (this.users = users as JSON))
  }
  getUsers():void{
    this.httpClient.get('http://127.0.0.1:5000/api/users').subscribe(users => (this.users = users as JSON))

  }
  add(name:string):void{
    this.editUser = undefined
    name = name.trim()
    if(!name){
      return
    }
    const newUser: User = {name} as User
    this.httpClient.get('http://127.0.0.1:5000/api/users').subscribe(() => this.getUsers())
  }

  delete(user: User):void{
    //  this.users =this.users.filter(h => h !== user)
    this.httpClient.get('http://127.0.0.1:5000/api/user')
    .subscribe(() => console.log('User Deleted'))

  }
  edit(user){
    this.editUser = user

  }
  update(){
    if(this.editUser){
      this.httpClient.get('http://127.0.0.1:5000/userss').subscribe(() => {
        this.getUsers()
      })
      this.editUser = undefined
    }
  }

}


