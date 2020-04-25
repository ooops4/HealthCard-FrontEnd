import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AuthGuardAdminService } from './admin/admin-login/auth-guard-admin.service';
import { AuthenticationAdminService } from './admin/admin-login/authentication-admin.service';
import { DoctorsListComponent } from './admin/admin-dashboard/doctors-list/doctors-list.component';
import { AddDoctorComponent } from './admin/admin-dashboard/doctors-list/add-doctor/add-doctor.component';
import { UserDetailsComponent } from './admin/admin-dashboard/users-list/user-details/user-details.component';
import { AddNewUserComponent } from './admin/admin-dashboard/users-list/add-new-user/add-new-user.component';
import { UsersListComponent } from './admin/admin-dashboard/users-list/users-list.component';
import { HospitalListComponent } from './admin/admin-dashboard/hospital-list/hospital-list.component';
import { ClinicListComponent } from './admin/admin-dashboard/clinic-list/clinic-list.component';
import { MedicalStoreListComponent } from './admin/admin-dashboard/medical-store-list/medical-store-list.component';
import { LaboratoryListComponent } from './admin/admin-dashboard/laboratory-list/laboratory-list.component';
import { AddClinicComponent } from './admin/admin-dashboard/clinic-list/add-clinic/add-clinic.component';
import { AddHospitalComponent } from './admin/admin-dashboard/hospital-list/add-hospital/add-hospital.component';
import { AddLaboratoryComponent } from './admin/admin-dashboard/laboratory-list/add-laboratory/add-laboratory.component';
import { AddMedicalStoreComponent } from './admin/admin-dashboard/medical-store-list/add-medical-store/add-medical-store.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UploadComponent } from './upload/upload.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { NewPatientComponent } from './doctor/doctor-dashboard/new-patient/new-patient.component';
import { DoctorLoginComponent } from './doctor/doctor-login/doctor-login.component';
import { PatientListComponent } from './doctor/doctor-dashboard/patient-list/patient-list.component';
import { PatientDetailsComponent } from './doctor/doctor-dashboard/patient-details/patient-details.component';
import { NewCaseComponent } from './doctor/doctor-dashboard/cases/new-case/new-case.component';
import { ViewCasesComponent } from './doctor/doctor-dashboard/cases/view-cases/view-cases.component';
import { AuthGuardDoctorService } from './doctor/doctor-login/auth-guard-doctor.service';
import { AuthenticationDoctorService } from './doctor/doctor-login/authentication-doctor.service';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminLoginComponent,
    DoctorsListComponent,
    AddDoctorComponent,
    UserDetailsComponent,
    AddNewUserComponent,
    UsersListComponent,
    HospitalListComponent,
    ClinicListComponent,
    MedicalStoreListComponent,
    LaboratoryListComponent,
    AddClinicComponent,
    AddHospitalComponent,
    AddLaboratoryComponent,
    AddMedicalStoreComponent,
    UploadComponent,
    DoctorDashboardComponent,
    NewPatientComponent,
    DoctorLoginComponent,
    PatientListComponent,
    PatientDetailsComponent,
    NewCaseComponent,
    ViewCasesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
    
  ],
  providers: [AuthenticationService, AuthGuardService, AuthGuardAdminService, AuthenticationAdminService, AuthGuardDoctorService, AuthenticationDoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
