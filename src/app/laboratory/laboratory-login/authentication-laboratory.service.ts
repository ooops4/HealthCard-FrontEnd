import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router'


export interface LaboratoryDetails {
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
  laboratory_document:File
  established_date:Date
}
export interface AddLaboratory {
  _id: string,
  laboratory_name: string,
  license_number : string,
  street:string,
  city:string,
  state:string,
  landmark:string,
  pincode:number,
  email: string,
  password:string
  owner_name:string,
  contact_number:number,
  emergency_contact_number:number
  laboratory_document:File
  established_date:Date


}
interface loginData {
  _id: string,
  token: string,
  laboratory_name: string
}

@Injectable()
export class AuthenticationLaboratoryService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user:{email:string, password: string}) {
    return this.httpClient.post<any>(`http://127.0.0.1:5000/api/laboratory/login`, user);
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
    localStorage.setItem('laboratory_name',data.laboratory_name);
  }
  
  getData() {
    const token = localStorage.getItem('token');
    const _id = localStorage.getItem('_id');
    const laboratory_name = localStorage.getItem('laboratory_name');
    if (token && _id && laboratory_name) {
      return { token: token, _id: _id, laboratory_name: laboratory_name }
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

    public AddLaboratory(laboratory: LaboratoryDetails): Observable<any> {
      const formData = new FormData;
    for (const [key, value] of Object.entries(laboratory)) {
      formData.append(key, value);
    }
    console.log(formData);
      return this.httpClient.post(`http://127.0.0.1:5000/api/laboratory/register`, formData)
  }

 
}