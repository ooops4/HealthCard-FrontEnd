import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

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
  doctor_name: string
}


@Injectable()
export class AuthenticationDoctorService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user:{email:string, password: string}) {
    return this.httpClient.post<any>(`http://127.0.0.1:5000/api/doctor/login`, user);
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
    localStorage.setItem('doctor_name',data.doctor_name);
  }
  
  getData() {
    const token = localStorage.getItem('token');
    const _id = localStorage.getItem('_id');
    const doctor_name = localStorage.getItem('doctor_name');
    if (token && _id && doctor_name) {
      return { token: token, _id: _id, doctor_name: doctor_name }
    }
    return null;
  }

  removeData() {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('doctor_name');
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

 
}