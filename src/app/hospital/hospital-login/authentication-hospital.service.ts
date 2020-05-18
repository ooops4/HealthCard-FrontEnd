import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router'


export interface HospitalDetails {
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
export interface AddHospital {
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
  hospital_name: string
}


@Injectable()
export class AuthenticationHospitalService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user:{email:string, password: string}) {
    return this.httpClient.post(`http://127.0.0.1:5000/api/hospital/login`, user);
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
    localStorage.setItem('hospital_name',data.hospital_name);
  }
  
  getData() {
    const token = localStorage.getItem('token');
    const _id = localStorage.getItem('_id');
    const hospital_name = localStorage.getItem('hospital_name');
    if (token && _id && hospital_name) {
      return { token: token, _id: _id, hospital_name: hospital_name }
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

    public AddHospital(hospital: HospitalDetails): Observable<any> {
      return this.httpClient.post(`http://127.0.0.1:5000/api/hospital/register`, hospital)
  }

 
}