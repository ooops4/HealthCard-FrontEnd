import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuardAdminService } from '../app/admin/admin-login/auth-guard-admin.service'
import { UserDetailsComponent } from './admin/admin-dashboard/users-list/user-details/user-details.component';
import { DoctorsListComponent } from './admin/admin-dashboard/doctors-list/doctors-list.component';
import { AddDoctorComponent } from './admin/admin-dashboard/doctors-list/add-doctor/add-doctor.component';
import { UsersListComponent } from './admin/admin-dashboard/users-list/users-list.component';
import { AddNewUserComponent } from './admin/admin-dashboard/users-list/add-new-user/add-new-user.component';
import { ClinicListComponent } from './admin/admin-dashboard/clinic-list/clinic-list.component';
import { AddClinicComponent } from './admin/admin-dashboard/clinic-list/add-clinic/add-clinic.component';
import { AddHospitalComponent } from './admin/admin-dashboard/hospital-list/add-hospital/add-hospital.component';
import { HospitalListComponent } from './admin/admin-dashboard/hospital-list/hospital-list.component';
import { LaboratoryListComponent } from './admin/admin-dashboard/laboratory-list/laboratory-list.component';
import { AddLaboratoryComponent } from './admin/admin-dashboard/laboratory-list/add-laboratory/add-laboratory.component';
import { MedicalStoreListComponent } from './admin/admin-dashboard/medical-store-list/medical-store-list.component';
import { AddMedicalStoreComponent } from './admin/admin-dashboard/medical-store-list/add-medical-store/add-medical-store.component';
import { UploadComponent } from './upload/upload.component';
import { DoctorLoginComponent } from './doctor/doctor-login/doctor-login.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { AuthGuardDoctorService } from './doctor/doctor-login/auth-guard-doctor.service';
import { AuthGuardHospitalService } from './hospital/hospital-login/auth-guard-hospital.service';
import { HospitalLoginComponent } from './hospital/hospital-login/hospital-login.component';
import { HospitalDashboardComponent } from './hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalPatientDetailsComponent } from './hospital/hospital-dashboard/hospital-patient-details/hospital-patient-details.component';
import { HospitalNewCaseComponent } from './hospital/hospital-dashboard/cases/hospital-new-case/hospital-new-case.component';
import { HospitalViewCasesComponent } from './hospital/hospital-dashboard/cases/hospital-view-cases/hospital-view-cases.component';
import { HospitalNewPatientComponent } from './hospital/hospital-dashboard/hospital-new-patient/hospital-new-patient.component';
import { ClinicDetailsComponent } from './admin/admin-dashboard/clinic-list/clinic-details/clinic-details.component';
import { HospitalDetailsComponent } from './admin/admin-dashboard/hospital-list/hospital-details/hospital-details.component';
import { LaboratoryDetailsComponent } from './admin/admin-dashboard/laboratory-list/laboratory-details/laboratory-details.component';
import { DoctorDetailsComponent } from './admin/admin-dashboard/doctors-list/doctor-details/doctor-details.component';
import { MedicalStoreDetailsComponent } from './admin/admin-dashboard/medical-store-list/medical-store-details/medical-store-details.component';
import { DoctorNewCaseComponent } from './doctor/doctor-dashboard/cases/doctor-new-case/doctor-new-case.component';
import { DoctorCaseDetailsComponent } from './doctor/doctor-dashboard/cases/doctor-case-details/doctor-case-details.component';
import { DoctorPatientDetailsComponent } from './doctor/doctor-dashboard/doctor-patient-details/doctor-patient-details.component';
import { DoctorViewCasesComponent } from './doctor/doctor-dashboard/cases/doctor-view-cases/doctor-view-cases.component';
import { HospitalCaseDetailsComponent } from './hospital/hospital-dashboard/cases/hospital-case-details/hospital-case-details.component';
import { ClinicLoginComponent } from './clinic/clinic-login/clinic-login.component';
import { AuthGuardClinicService } from './clinic/clinic-login/auth-guard-clinic.service';
import { ClinicNewPatientComponent } from './clinic/clinic-dashboard/clinic-new-patient/clinic-new-patient.component';
import { ClinicDashboardComponent } from './clinic/clinic-dashboard/clinic-dashboard.component';
import { ClinicPatientDetailsComponent } from './clinic/clinic-dashboard/clinic-patient-details/clinic-patient-details.component';
import { ClinicNewCaseComponent } from './clinic/clinic-dashboard/cases/clinic-new-case/clinic-new-case.component';
import { ClinicViewCasesComponent } from './clinic/clinic-dashboard/cases/clinic-view-cases/clinic-view-cases.component';
import { ClinicCaseDetailsComponent } from './clinic/clinic-dashboard/cases/clinic-case-details/clinic-case-details.component';
import { LaboratoryLoginComponent } from './laboratory/laboratory-login/laboratory-login.component';
import { LaboratoryDashboardComponent } from './laboratory/laboratory-dashboard/laboratory-dashboard.component';
import { AuthGuardLaboratoryService } from './laboratory/laboratory-login/auth-guard-laboratory.service';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/profile', component:  ProfileComponent,canActivate:[AuthGuardService] },


  // ADMIN
  { path: 'admin/login', component: AdminLoginComponent},
  { path: 'admin/dashboard', component: AdminDashboardComponent,canActivate:[AuthGuardAdminService] },
  
  //ADMIN USER Thing
  { path: 'admin/user/users-list', component: UsersListComponent },
  { path: 'admin/user/add-user', component: AddNewUserComponent },
  { path: 'admin/user/details/:user_id',component: UserDetailsComponent },


  // Admin CLINIC 
  { path: 'admin/clinic/clinic-list', component: ClinicListComponent },
  { path: 'admin/clinic/add-clinic', component: AddClinicComponent },
  { path: 'admin/clinic/details/:clinic_id',component:ClinicDetailsComponent},
  

  //ADMIN HOSPITAL
  { path: 'admin/hospital/hospital-list', component: HospitalListComponent },
  { path: 'admin/hospital/add-hospital', component: AddHospitalComponent},
  { path: 'admin/hospital/details/:hospital_id', component: HospitalDetailsComponent},

  //ADMIN LABORATORY
  { path: 'admin/laboratory/laboratory-list', component: LaboratoryListComponent},
  { path: 'admin/laboratory/add-laboratory', component: AddLaboratoryComponent},
  { path: 'admin/laboratory/details/:labortory_id', component: LaboratoryDetailsComponent},

  //ADMIN MEDICAL
  { path: 'admin/medical/medical-store-list', component: MedicalStoreListComponent},
  { path: 'admin/medical/add-medical-store', component: AddMedicalStoreComponent},
  { path: 'admin/medical/details/:medical_id', component: MedicalStoreDetailsComponent},

  //ADMIN DOCTOR
  { path: 'admin/doctor/doctor-list', component: DoctorsListComponent},
  { path: 'admin/doctor/add-doctor', component: AddDoctorComponent},
  { path: 'admin/doctor/details/:doctor_id', component: DoctorDetailsComponent},

  //ADMIN CLINIC

  
  { path: 'upload', component: UploadComponent},


  // DOCTOR USER Department
  { path: 'doctor/login', component: DoctorLoginComponent},
  { path: 'doctor/dashboard', component: DoctorDashboardComponent,canActivate:[AuthGuardDoctorService]},  
  // { path: 'doctor/new-patient', component: Hospo},
  { path: 'doctor/patient-details/:patientID', component: DoctorPatientDetailsComponent},
  { path: 'doctor/patient-details/new-case/:patientID', component: DoctorNewCaseComponent},
  { path: 'doctor/patient-details/view-cases/:patientID', component: DoctorViewCasesComponent},
  { path: 'doctor/patient-details/case-details/:caseID', component: DoctorCaseDetailsComponent},


  //HOSPITAL USER DEPARTMENT
  { path: 'hospital/login', component: HospitalLoginComponent},
  { path: 'hospital/dashboard', component: HospitalDashboardComponent,canActivate:[AuthGuardHospitalService]},  
  { path: 'hospital/new-patient', component: HospitalNewPatientComponent},   
  { path: 'hospital/patient-details/:patientID', component: HospitalPatientDetailsComponent},  
  { path: 'hospital/patient-details/new-case/:patientID', component: HospitalNewCaseComponent},  
  { path: 'hospital/patient-details/view-cases/:patientID', component: HospitalViewCasesComponent},  
  { path: 'hospital/patient-details/case-details/:caseID', component: HospitalCaseDetailsComponent},

  //CLINIC USER DEPARTMENT
  { path: 'clinic/login', component: ClinicLoginComponent},
  { path: 'clinic/dashboard', component: ClinicDashboardComponent,canActivate:[AuthGuardClinicService]},  
  { path: 'clinic/new-patient', component: ClinicNewPatientComponent},   
  { path: 'clinic/patient-details/:patientID', component: ClinicPatientDetailsComponent},  
  { path: 'clinic/patient-details/new-case/:patientID', component: ClinicNewCaseComponent},  
  { path: 'clinic/patient-details/view-cases/:patientID', component: ClinicViewCasesComponent},  
  { path: 'clinic/patient-details/case-details/:caseID', component: ClinicCaseDetailsComponent},

  //LABORATORY USER DEPARTMENT
  { path: 'laboratory/login', component: LaboratoryLoginComponent},
  { path: 'laboratory/dashboard', component: LaboratoryDashboardComponent,canActivate:[AuthGuardLaboratoryService]},  
  // { path: 'laboratory/new-patient', component: ClinicNewPatientComponent},   
  // { path: 'laboratory/patient-details/:patientID', component: ClinicPatientDetailsComponent},  
  // { path: 'laboratory/patient-details/new-case/:patientID', component: ClinicNewCaseComponent},  
  // { path: 'laboratory/patient-details/view-cases/:patientID', component: ClinicViewCasesComponent},  
  // { path: 'laboratory/patient-details/case-details/:caseID', component: ClinicCaseDetailsComponent},

  
  //MEDICAL USER DEPARTMENT
  { path: 'medical/login', component: LaboratoryLoginComponent},
  { path: 'medical/dashboard', component: LaboratoryDashboardComponent,canActivate:[AuthGuardLaboratoryService]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
