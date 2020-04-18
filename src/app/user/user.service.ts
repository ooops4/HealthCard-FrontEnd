// import { Injectable } from '@angular/core'
// import { HttpClient } from '@angular/common/http'

// import {Observable} from 'rxjs'
// import {UserDetails} from './users'

// @Injectable()
// export class UserServices{
//   constructor(private http: HttpClient){}
  
//   getUsers(): Observable<User[]>{
//     return this.http.get<User[]>('api/users')
//   }
  
//   addUser(user: User):Observable<User[]>{
//     return this.http.post<User[]>('api/users',user)
//   }

//   deleteUser(id:number): Observable<{}> {
//     const url = `api/user/${id}`
//     console.log(id);
//     return this.http.delete(url)
//   }

//   UpdateUser(user:User):Observable<User>{
//     const url = 'api/user/${user._id}'
//     return this.http.put<User>(url, user)
//   }
// }
