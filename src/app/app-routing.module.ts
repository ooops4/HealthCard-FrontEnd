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
import { NewPatientComponent } from './doctor/doctor-dashboard/new-patient/new-patient.component';
import { PatientListComponent } from './doctor/doctor-dashboard/patient-list/patient-list.component';
import { PatientDetailsComponent } from './doctor/doctor-dashboard/patient-details/patient-details.component';
import { NewCaseComponent } from './doctor/doctor-dashboard/cases/new-case/new-case.component';
import { ViewCasesComponent } from './doctor/doctor-dashboard/cases/view-cases/view-cases.component';
import { AuthGuardDoctorService } from './doctor/doctor-login/auth-guard-doctor.service';
import { AuthGuardHospitalService } from './hospital/hospital-login/auth-guard-hospital.service';
import { HospitalLoginComponent } from './hospital/hospital-login/hospital-login.component';
import { HospitalDashboardComponent } from './hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalPatientDetailsComponent } from './hospital/hospital-dashboard/hospital-patient-details/hospital-patient-details.component';
import { HospitalNewCaseComponent } from './hospital/hospital-dashboard/cases/hospital-new-case/hospital-new-case.component';
import { HospitalViewCasesComponent } from './hospital/hospital-dashboard/cases/hospital-view-cases/hospital-view-cases.component';
import { HospitalPatientListComponent } from './hospital/hospital-dashboard/hospital-patient-list/hospital-patient-list.component';
import { HospitalNewPatientComponent } from './hospital/hospital-dashboard/hospital-new-patient/hospital-new-patient.component';
import { CaseDetailsComponent } from './doctor/doctor-dashboard/cases/case-details/case-details.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component:  ProfileComponent,canActivate:[AuthGuardService] },


  // ADMIN
  { path: 'admin/login', component: AdminLoginComponent},
  { path: 'admin/dashboard', component: AdminDashboardComponent,canActivate:[AuthGuardAdminService] },
  
  //ADMIN USER Thing
  { path: 'admin/users/users-list', component: UsersListComponent },
  { path: 'admin/users/add-user', component: AddNewUserComponent },
  { path: 'admin/users/details/:user_id',component: UserDetailsComponent },


  // Admin Dashboard Department
  { path: 'admin/clinic/clinic-list', component: ClinicListComponent },
  { path: 'admin/clinic/add-clinic', component: AddClinicComponent },

  //ADMIN HOSPITAL
  { path: 'admin/hospital/hospital-list', component: HospitalListComponent },
  { path: 'admin/hospital/add-hospital', component: AddHospitalComponent},

  //ADMIN LABORATORY
  { path: 'admin/laboratory/laboratory-list', component: LaboratoryListComponent},
  { path: 'admin/laboratory/add-laboratory', component: AddLaboratoryComponent},

  //ADMIN MEDICAL
  { path: 'admin/medical/medical-store-list', component: MedicalStoreListComponent},
  { path: 'admin/medical/add-medical-store', component: AddMedicalStoreComponent},

  //ADMIN DOCTOR
  { path: 'admin/doctor/doctor-list', component: DoctorsListComponent},
  { path: 'admin/doctor/add-doctor', component: AddDoctorComponent},
  
  
  { path: 'upload', component: UploadComponent},


  // DOCTOR USER Department
  { path: 'doctor/login', component: DoctorLoginComponent},
  { path: 'doctor/dashboard', component: DoctorDashboardComponent,canActivate:[AuthGuardDoctorService]},  
  { path: 'doctor/new-patient', component: NewPatientComponent},
  { path: 'doctor/patient-list', component: PatientListComponent},
  { path: 'doctor/patient-details/:patientID', component: PatientDetailsComponent},
  { path: 'doctor/patient-details/new-case/:patientID', component: NewCaseComponent},
  { path: 'doctor/patient-details/view-cases/:patientID', component: ViewCasesComponent},
  { path: 'doctor/patient-details/case-details/:caseID', component: CaseDetailsComponent},


  //HOSPITAL USER DEPARTMENT
  { path: 'hospital/login', component: HospitalLoginComponent},
  { path: 'hospital/dashboard', component: HospitalDashboardComponent,canActivate:[AuthGuardHospitalService]},  
  { path: 'hospital/new-patient', component: HospitalNewPatientComponent},   
  { path: 'hospital/patient-list', component: HospitalPatientListComponent},   
  { path: 'hospital/patient-details/:patientID', component: HospitalPatientDetailsComponent},  
  { path: 'hospital/patient-details/:patientID/new-cases', component: HospitalNewCaseComponent},  
  { path: 'hospital/patient-details/:patientID/view-cases', component: HospitalViewCasesComponent},  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
