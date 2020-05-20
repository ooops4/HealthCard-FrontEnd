import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthenticationAdminService } from './admin/admin-login/authentication-admin.service';
import { AuthenticationDoctorService } from './doctor/doctor-login/authentication-doctor.service';
import { AuthenticationHospitalService } from './hospital/hospital-login/authentication-hospital.service';
import { AuthenticationLaboratoryService } from './laboratory/laboratory-login/authentication-Laboratory.service';
import { AuthenticationMedicalStoreService } from './medicalstore/medicalstore-login/authentication-medicalstore.service';
import { AuthenticationClinicService } from './clinic/clinic-login/authentication-clinic.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Health Card';
  public isMenuCollapsed = true;
  
  constructor(public authUser: AuthenticationService, 
              public authAdmin : AuthenticationAdminService, 
              public authDoctor : AuthenticationDoctorService,
              public authHospital : AuthenticationHospitalService,
              public authLaboratory : AuthenticationLaboratoryService,
              public authMedical : AuthenticationMedicalStoreService,
              public authClinic : AuthenticationClinicService,
               ){}

}
