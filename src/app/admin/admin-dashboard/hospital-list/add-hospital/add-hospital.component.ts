import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthenticationHospitalService, HospitalDetails, AddHospital } from 'src/app/hospital/hospital-login/authentication-hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent {


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



  constructor(public fb:FormBuilder,private auth:AuthenticationHospitalService,private router:Router) { }


  registrationForm = this.fb.group({
    hospital_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', [Validators.required,Validators.min(8),Validators.max(16),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    license_number: ['',Validators.required],
    established_date: ['',[Validators.required,this.DateValidator]],
    contact_number: ['',Validators.required],
    emergency_contact_number: ['',Validators.required],
    owner_name: ['',Validators.required],
    street: ['', Validators.required],
    city: ['',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    landmark: ['', Validators.required],
    hospital_document: ['', Validators.required],
   });



   selectFile(event) {
    const hospital_document = (event.target as HTMLInputElement).files[0];
    console.log(hospital_document);
    this.registrationForm.get('hospital_document').patchValue(hospital_document);
    this.registrationForm.updateValueAndValidity();
    console.log(this.registrationForm.value);
  }



   DateValidator(control: AbstractControl): {[key:string]:boolean} | null {
    const established_date = control;
    if (established_date.pristine) {
      return null;
    }
    const current_date = new Date(established_date.value)
    if( current_date > new Date()){
      established_date.setValue(null);
      return {'greaterDate': true}
    }
    else{
      return null;
    }
  
  }


  NewHospitalCredentials: AddHospital;
  onSubmit(){
    this.NewHospitalCredentials = this.registrationForm.value;
    this.auth.AddHospital(this.NewHospitalCredentials).subscribe(
      () =>{
        this.router.navigateByUrl('/admin/hospital/add-hospital')
        console.log(this.NewHospitalCredentials)
      },
      err =>{
        console.error(err);
        console.log(this.NewHospitalCredentials)
        
      }
    )
  }  
}
