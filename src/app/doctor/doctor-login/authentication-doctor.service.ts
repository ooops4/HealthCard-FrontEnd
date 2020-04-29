import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { NewDoctorDetails } from 'src/app/admin/admin-dashboard/doctors-list/add-doctor/new-doctor-details'

export interface DoctorDetails {
  _id: string,
  first_name: string,
  last_name: string,
  email: string,
  age:number,
  father_name:string,
  gender:string,
  mother_name:string,
  contact_number:number,
  emergency_contact_number:number,
  qualification:string,
}
export interface AddDoctor {
  _id: string,
  first_name: string,
  last_name: string,
  password: string,
  email: string,
  age:number,
  father_name:string,
  gender:string,
  mother_name:string,
  contact_number:number,
  emergency_contact_number:number,
  qualification:string,
}
interface loginData {
  _id: string,
  token: string,
  name: string
}
// interface DoctorTokenResponse {
//   token: string
// }
// interface doctor_login_data {
//   _id: string;
//   token:string;
//   user_name:string;
// }
// export interface DoctorTokenPayload {
//   _id: string
//   first_name: string
//   last_name: string
//   email: string
//   password: string
//   gender: string
//   age: string
// }

@Injectable()
export class AuthenticationDoctorService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user:{email:string, password: string}) {
    return this.httpClient.post(`http://127.0.0.1:5000/api/doctor/login`, user);
  }

  logout(){
    this.removeData();
  }

  loginData(data) {
    this.saveData(data);
  }

  saveData(data: loginData) {
    localStorage.setItem('token',data.token);
    localStorage.setItem('_id',data._id);
    localStorage.setItem('name',data.name);
  }
  
  getData() {
    const token = localStorage.getItem('token');
    const _id = localStorage.getItem('_id');
    const name = localStorage.getItem('name');
    if (token && _id && name) {
      return { token: token, _id: _id, name: name }
    }
    return null;
  }

  removeData() {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('name');
  }

  public isLoggedIn(): boolean{
    const data = this.getData();
    if(!data){
      return false;
    }
    return true;
  }

    public AddUser(user: DoctorDetails): Observable<any> {
      return this.httpClient.post(`http://127.0.0.1:5000/api/doctor/register`, user)
  }

  // private saveToken(token: string): void {
  //   localStorage.setItem('doctortoken', token)
  //   this.token = token
  // }

  // private getToken(): string {
  //   if (!this.token) {
  //     this.token = localStorage.getItem('doctortoken')
  //   }
  //   return this.token
  // }

  // public getDoctorDetails(): DoctorDetails {
  //   const token = this.getToken()
  //   let payload
  //   if (token) {
  //     payload = token.split('.')[1]
  //     payload = window.atob(payload)
  //     // console.log(window.atob(payload))
  //     return JSON.parse(payload)

  //   } else {
  //     return null
  //   }
  // }

  // public isLoggedIn(): boolean {
  //   const user = this.getDoctorDetails()
  //   if (user) {
  //     return user.exp > Date.now() / 1000
  //   } else {
  //     return false
  //   }
  // }
  // public AddUser(user: DoctorTokenPayload): Observable<any> {
  //   const base = this.httpClient.post(`http://127.0.0.1:5000/api/doctor/register`, user)

  //   const request = base.pipe(
  //     map((data: DoctorTokenResponse) => {
  //       if (data.token) {
  //         this.saveToken(data.token)
  //       }
  //       return data
  //     })
  //   )

  //   return request
  // }
  

  // public login(user: DoctorTokenPayload): Observable<any> {
  //   const base = this.httpClient.post(`http://127.0.0.1:5000/api/doctor/login`, user)

  //   const request = base.pipe(
  //     map((data: DoctorTokenResponse) => {
  //       if (data.token) {
  //         this.saveToken(data.token)
  //         console.log(data)
  //       }
  //       return data
  //     })
  //   )

  //   return request
  // }

  // public logout(): void {
  //   this.token = ''
  //   window.localStorage.removeItem('doctortoken')
  //   this.router.navigateByUrl('/doctor/login')
  // }
}