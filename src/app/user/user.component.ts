import { Component, OnInit } from '@angular/core';
import {User} from './users'
// import {UserServices} from './user.service'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // providers: [UserServices],
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  users: JSON
  editUser: JSON

  constructor(private httpClient: HttpClient){}


  ngOnInit(){
    this.httpClient.get('http://127.0.0.1:5000/api/users').subscribe(users => (this.users = users as JSON))
  }

  getUsers():void{
    this.httpClient.get('http://127.0.0.1:5000/api/users').subscribe(users => {
      this.users = users as JSON;
      console.log(this.users);
    })
  }

  add(name:string):void{
    this.editUser = undefined
    name = name.trim()
    if(!name){
      return
    }
    const newUser: User = {name} as User
    this.httpClient.post('http://127.0.0.1:5000/api/users',{ "name": name}).subscribe(() => this.getUsers())
  }

  delete(user: User):void{
    // this.users =this.users.filter(h => h !== user)
    // console.log(user);
    this.httpClient.delete(`http://127.0.0.1:5000/api/user/${user._id}`).subscribe(() => this.getUsers())
  }
  edit(user){
    this.editUser = user

  }
  update(user: User){
    if(this.editUser){
      this.httpClient.put(`http://127.0.0.1:5000/api/user/${user._id}`, {"name": user.name}).subscribe(() => {
        this.getUsers()
      })
      this.editUser = undefined
    }
  }
  ViewDetails(user:User){
    this.httpClient.get(`http://127.0.0.1:5000/api/user/${user._id}`)
    console.log(user)

  }

}


