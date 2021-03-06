import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
 
  users;
  searchText= this.users

  constructor(private httpClient: HttpClient, private route: Router)  { }
  
  
  ngOnInit() {

    this.httpClient.get('http://127.0.0.1:5000/api/users/').subscribe(users => (this.users = users))
    console.log(this.users)

   
  }
  // getUsers():void{
  //   this.httpClient.get('http://127.0.0.1:5000/api/users').subscribe(users => (this.users = users))

  // }

  NewUser(){
    this.route.navigateByUrl('/admin/user/add-user')
  }
    
}




  


 
//   }
//   getUsers():void{
//     this.httpClient.get('http://127.0.0.1:5000/api/users').subscribe(users => (this.users = users as JSON))

//   }
//   add(name:string):void{
//     this.editUser = undefined
//     name = name.trim()
//     if(!name){
//       return
//     }
//     const newUser: User = {name} as User
//     this.httpClient.get('http://127.0.0.1:5000/api/users').subscribe(() => this.getUsers())
//   }

//   delete(user: User):void{
//     //  this.users =this.users.filter(h => h !== user)
//     this.httpClient.get('http://127.0.0.1:5000/api/user')
//     .subscribe(() => console.log('User Deleted'))

//   }
//   edit(user){
//     this.editUser = user

//   }
//   update(){
//     if(this.editUser){
//       this.httpClient.get('http://127.0.0.1:5000/userss').subscribe(() => {
//         this.getUsers()
//       })
//       this.editUser = undefined
//     }
//   }

// }
  

  



 
