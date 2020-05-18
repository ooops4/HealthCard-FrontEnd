import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
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
import { DoctorLoginComponent } from './doctor/doctor-login/doctor-login.component';
import { DoctorPatientDetailsComponent } from './doctor/doctor-dashboard/doctor-patient-details/doctor-patient-details.component';
import { DoctorViewCasesComponent } from './doctor/doctor-dashboard/cases/doctor-view-cases/doctor-view-cases.component';
import { AuthGuardDoctorService } from './doctor/doctor-login/auth-guard-doctor.service';
import { AuthenticationDoctorService } from './doctor/doctor-login/authentication-doctor.service';
import { HospitalDashboardComponent } from './hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalLoginComponent } from './hospital/hospital-login/hospital-login.component';
import { AuthenticationHospitalService } from './hospital/hospital-login/authentication-hospital.service';
import { AuthGuardHospitalService } from './hospital/hospital-login/auth-guard-hospital.service';
import { HospitalViewCasesComponent } from './hospital/hospital-dashboard/cases/hospital-view-cases/hospital-view-cases.component';
import { HospitalNewCaseComponent } from './hospital/hospital-dashboard/cases/hospital-new-case/hospital-new-case.component';
import { HospitalNewPatientComponent } from './hospital/hospital-dashboard/hospital-new-patient/hospital-new-patient.component';
import { LaboratoryDashboardComponent } from './laboratory/laboratory-dashboard/laboratory-dashboard.component';
import { LaboratoryLoginComponent } from './laboratory/laboratory-login/laboratory-login.component';
import { ClinicDashboardComponent } from './clinic/clinic-dashboard/clinic-dashboard.component';
import { ClinicLoginComponent } from './clinic/clinic-login/clinic-login.component';
import { ClinicDetailsComponent } from './admin/admin-dashboard/clinic-list/clinic-details/clinic-details.component';
import { AuthGuardClinicService } from './clinic/clinic-login/auth-guard-clinic.service';
import { AuthenticationClinicService } from './clinic/clinic-login/authentication-clinic.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DoctorDetailsComponent } from './admin/admin-dashboard/doctors-list/doctor-details/doctor-details.component';
import { HospitalDetailsComponent } from './admin/admin-dashboard/hospital-list/hospital-details/hospital-details.component';
import { LaboratoryDetailsComponent } from './admin/admin-dashboard/laboratory-list/laboratory-details/laboratory-details.component';
import { MedicalStoreDetailsComponent } from './admin/admin-dashboard/medical-store-list/medical-store-details/medical-store-details.component';
import { MedicalstoreLoginComponent } from './medicalstore/medicalstore-login/medicalstore-login.component';
import { MedicalstoreDashboardComponent } from './medicalstore/medicalstore-dashboard/medicalstore-dashboard.component';
import { ClinicNewCaseComponent } from './clinic/clinic-dashboard/cases/clinic-new-case/clinic-new-case.component';
import { ClinicCaseDetailsComponent } from './clinic/clinic-dashboard/cases/clinic-case-details/clinic-case-details.component';
import { ClinicViewCasesComponent } from './clinic/clinic-dashboard/cases/clinic-view-cases/clinic-view-cases.component';
import { ClinicNewPatientComponent } from './clinic/clinic-dashboard/clinic-new-patient/clinic-new-patient.component';
import { ClinicPatientDetailsComponent } from './clinic/clinic-dashboard/clinic-patient-details/clinic-patient-details.component';
import { DoctorCaseDetailsComponent } from './doctor/doctor-dashboard/cases/doctor-case-details/doctor-case-details.component';
import { DoctorNewCaseComponent } from './doctor/doctor-dashboard/cases/doctor-new-case/doctor-new-case.component';
import { AuthGuardLaboratoryService } from './laboratory/laboratory-login/auth-guard-laboratory.service';
import { AuthenticationLaboratoryService } from './laboratory/laboratory-login/authentication-Laboratory.service';
import { AuthGuardMedicalStoreService } from './medicalstore/medicalstore-login/auth-guard-medicalstoreservice';
import { AuthenticationMedicalStoreService } from './medicalstore/medicalstore-login/authentication-medicalstore.service';
import { HospitalCaseDetailsComponent } from './hospital/hospital-dashboard/cases/hospital-case-details/hospital-case-details.component';





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
    DoctorLoginComponent,
    HospitalDashboardComponent,
    HospitalLoginComponent,
    HospitalViewCasesComponent,
    HospitalNewCaseComponent,
    HospitalNewPatientComponent,
    LaboratoryDashboardComponent,
    LaboratoryLoginComponent,
    ClinicNewCaseComponent,
    ClinicCaseDetailsComponent,
    ClinicDashboardComponent,
    ClinicLoginComponent,
    ClinicViewCasesComponent,
    ClinicDetailsComponent,
    ClinicViewCasesComponent,
    ClinicCaseDetailsComponent,
    ClinicNewPatientComponent,
    ClinicPatientDetailsComponent,
    DoctorDetailsComponent,
    HospitalDetailsComponent,
    LaboratoryDetailsComponent,
    MedicalStoreDetailsComponent,
    MedicalstoreLoginComponent,
    MedicalstoreDashboardComponent,
    DoctorCaseDetailsComponent,
    DoctorNewCaseComponent,
    DoctorViewCasesComponent,
    DoctorPatientDetailsComponent,
    HospitalCaseDetailsComponent,




  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    PdfViewerModule
    
   
  ],
  providers: [AuthenticationService, AuthGuardService,
              AuthGuardAdminService, AuthenticationAdminService, 
              AuthGuardDoctorService, AuthenticationDoctorService, 
              AuthenticationHospitalService, AuthGuardHospitalService,
              AuthGuardClinicService, AuthenticationClinicService,
            AuthGuardLaboratoryService,AuthenticationLaboratoryService,
          AuthGuardMedicalStoreService,AuthenticationMedicalStoreService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }

