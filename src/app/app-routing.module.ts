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



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component:  ProfileComponent,canActivate:[AuthGuardService] },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent,canActivate:[AuthGuardAdminService] },
  { path: 'doctors-list', component: DoctorsListComponent },
  { path: 'add-doctor', component: AddDoctorComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'add-user', component: AddNewUserComponent },
  { path: 'user/details/:user_id',component: UserDetailsComponent },


  // Admin Dashboard Department
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'clinic-list', component: ClinicListComponent },
  { path: 'add-clinic', component: AddClinicComponent },
  { path: 'hospital-list', component: HospitalListComponent },
  { path: 'add-hospital', component: AddHospitalComponent},
  { path: 'laboratory-list', component: LaboratoryListComponent},
  { path: 'add-laboratory', component: AddLaboratoryComponent},
  { path: 'medical-store-list', component: MedicalStoreListComponent},
  { path: 'add-medical-store', component: AddMedicalStoreComponent},
  { path: 'doctor-list', component: DoctorsListComponent},
  { path: 'add-doctor', component: AddDoctorComponent},
  { path: 'upload', component: UploadComponent},


  // Doctor Department
  { path: 'doctor/login', component: DoctorLoginComponent},
  { path: 'doctor/dashboard', component: DoctorDashboardComponent},  
  { path: 'doctor/new-patient', component: NewPatientComponent},
  { path: 'doctor/patient-list', component: PatientListComponent},
  { path: 'doctor/patient-details/:patientID', component: PatientDetailsComponent},
  { path: 'doctor/patient-details/:patientID/new-case', component: NewCaseComponent},
  { path: 'doctor/patient-details/:patientID/view-cases', component: ViewCasesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
