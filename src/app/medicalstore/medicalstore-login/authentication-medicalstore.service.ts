import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router'
import { MedicalStoreDetailsComponent } from 'src/app/admin/admin-dashboard/medical-store-list/medical-store-details/medical-store-details.component';


export interface MedicalDetails {
  _id: string,
  laboratory_name: string,
  license_number : string,
  street:string,
  city:string,
  state:string,
  landmark:string,
  pincode:number,
  email: string,
  owner_name:string,
  contact_number:number,
  emergency_contact_number:number
}
export interface AddMedical {
  _id: string,
  laboratory_name: string,
  license_number : string,
  street:string,
  city:string,
  state:string,
  landmark:string,
  pincode:number,
  email: string,
  owner_name:string,
  contact_number:number,
  emergency_contact_number:number
}
interface loginData {
  _id: string,
  token: string,
  medical_name: string
}

@Injectable()
export class AuthenticationMedicalStoreService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user:{email:string, password: string}) {
    return this.httpClient.post(`http://127.0.0.1:5000/api/medical/login`, user);
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
    localStorage.setItem('medical_name',data.medical_name);
  }
  
  getData() {
    const token = localStorage.getItem('token');
    const _id = localStorage.getItem('_id');
    const medical_name = localStorage.getItem('medical_name');
    if (token && _id && medical_name) {
      return { token: token, _id: _id, medical_name: medical_name }
    }
    return null;
  }

  removeData() {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('laboratory_name');
  }

  public isLoggedIn(): boolean{
    const data = this.getData();
    if(!data){
      return false;
    }
    return true;
  }

    public AddMedical(medical: MedicalDetails): Observable<any> {
      return this.httpClient.post(`http://127.0.0.1:5000/api/medical/register`, medical)
  }

 
}