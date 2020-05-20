import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

export interface HospitalDetails {
  _id: string,
  hospital_name:string,
  email: string,
  password: string,
  license_number:string,
  established_date:Date,
  contact_number:number,
  emergency_contact_number:number,
  owner_name:string,
  steet:string
  city:string
  state:string
  pincode:number
  landmark:string
  hospital_document:File
}
export interface AddHospital {
  _id: string,
  hospital_name:string,
  email: string,
  password: string,
  license_number:string,
  established_date:Date,
  contact_number:number,
  emergency_contact_number:number,
  owner_name:string,
  steet:string
  city:string
  state:string
  pincode:number
  landmark:string
  hospital_document:File
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
    return this.httpClient.post<any>(`http://127.0.0.1:5000/api/hospital/login`, user);
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
    localStorage.removeItem('hospital_name');
  }

  public isLoggedIn(): boolean{
    const data = this.getData();
    if(!data){
      return false;
    }
    return true;
  }

    public AddHospital(hospital: HospitalDetails): Observable<any> {
      const formData = new FormData;
      for (const [key, value] of Object.entries(hospital)) {
        formData.append(key, value);
      }
      console.log(formData);
      return this.httpClient.post(`http://127.0.0.1:5000/api/hospital/register`, formData)
  }

 
}