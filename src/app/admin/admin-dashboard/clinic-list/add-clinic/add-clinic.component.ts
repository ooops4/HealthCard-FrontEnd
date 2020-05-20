import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthenticationClinicService, AddClinic } from 'src/app/clinic/clinic-login/authentication-clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent {

  qualification : string;
  qualificationList: any = ['MBBS', 'BDS', 'ENT']

  state: string;
  state_list: any = ['Andaman and Nicobar Islands','Andhra Pradesh',
                    'Arunachal Pradesh','Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 
                    'Dadra and Nagar Haveli','Daman and Diu','Delhi',
                    'Goa','Gujarat','Haryana','Himachal Pradesh',
                    'Jammu and Kashmir' ,'Jharkhand' ,'Karnataka',
                    'Kerala','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur',
                    'Meghalaya','Mizoram','Nagaland','Odisha' ,'Pondicherry',
                    'Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura',
                    'Uttar Pradesh' ,'Uttarakhand','West Bengal'
                    ]


  changeQualification(e) {
    console.log(e.target.value);
  }



  constructor(public fb:FormBuilder,private auth:AuthenticationClinicService,private router:Router) { }


  registrationForm = this.fb.group({
    clinic_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', [Validators.required,Validators.min(8),Validators.max(16),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    license_number: ['',Validators.required],
    established_date: ['',[Validators.required,this.DateValidator]],
    doctor_name: ['',Validators.required],
    gender:['',Validators.required],
    age:['',Validators.required],
    contact_number: ['',Validators.required],
    emergency_contact_number: ['',Validators.required],
    qualification: ['', Validators.required],
    dob: ['',[ Validators.required,this.DateValidator]],
    street: ['', Validators.required],
    city: ['',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    landmark: ['', Validators.required],
    clinic_document: ['', Validators.required],
   });



   selectFile(event) {
    const clinic_document = (event.target as HTMLInputElement).files[0];
    console.log(clinic_document);
    this.registrationForm.get('clinic_document').patchValue(clinic_document);
    this.registrationForm.updateValueAndValidity();
    console.log(this.registrationForm.value);
  }



   DateValidator(control: AbstractControl): {[key:string]:boolean} | null {
    const dob = control;
    if (dob.pristine) {
      return null;
    }
    const dobValue = new Date(dob.value)
    if( dobValue > new Date()){
      dob.setValue(null);
      return {'greaterDate': true}
    }
    else{
      return null;
    }
  
  }


  NewClinicCredentials: AddClinic;
  onSubmit(){
    this.NewClinicCredentials = this.registrationForm.value;
    this.auth.AddClinic(this.NewClinicCredentials).subscribe(
      () =>{
        this.router.navigateByUrl('/admin/doctor/add-doctor')
        console.log(this.NewClinicCredentials)
      },
      err =>{
        console.error(err);
        console.log(this.NewClinicCredentials)
        
      }
    )
  }  
}