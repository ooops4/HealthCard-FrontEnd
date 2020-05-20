import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router'

export interface ClinicDetails {
  _id: string,
  clinic_name: string,
  license_number: string,
  established_date: Date
  doctor_name: string,
  qualification:string,
  gender: string,
  age:number,
  dob:Date,
  street: string,
  city: string,
  state: string,
  pincode: number,
  landmark: string,
  email: string,
  password: string,
  contact_number:number,
  emergency_contact_number:number
  clinic_document:File
}

export interface AddClinic {
  _id: string,
  clinic_name: string,
  license_number: string,
  established_date: Date
  doctor_name: string,
  qualification:string,
  gender: string,
  age:number,
  dob:Date,
  street: string,
  city: string,
  state: string,
  pincode: number,
  landmark: string,
  email: string,
  password: string,
  contact_number:number,
  emergency_contact_number:number
  clinic_document:File
}

interface loginData {
  _id: string,
  token: string,
  clinic_name: string
}


@Injectable()
export class AuthenticationClinicService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(clinic:{email:string, password: string}) {
    return this.httpClient.post<any>(`http://127.0.0.1:5000/api/clinic/login`, clinic);
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
    localStorage.setItem('clinic_name',data.clinic_name);
  }
  
  getData() {
    const token = localStorage.getItem('token');
    const _id = localStorage.getItem('_id');
    const clinic_name = localStorage.getItem('clinic_name');
    if (token && _id && clinic_name) {
      return { token: token, _id: _id, clinic_name: clinic_name }
    }
    return null;
  }

  removeData() {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('clinic_name');
  }

  public isLoggedIn(): boolean{
    const data = this.getData();
    if(!data){
      return false;
    }
    return true;
  }

  public AddClinic(clinic: ClinicDetails): Observable<any> {
    const formData = new FormData;
    for (const [key, value] of Object.entries(clinic)) {
      formData.append(key, value);
    }
    console.log(formData);
    return this.httpClient.post(`http://127.0.0.1:5000/api/clinic/register`, formData)
  }
}