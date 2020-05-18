import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { AuthenticationDoctorService, AddDoctor } from 'src/app/doctor/doctor-login/authentication-doctor.service';
import { Router } from '@angular/router';
// import { NewDoctorDetails } from './new-doctor-details';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent{
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



  constructor(public fb:FormBuilder,private auth:AuthenticationDoctorService,private router:Router) { }


  registrationForm = this.fb.group({
    first_name: ['',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
    last_name: ['',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', [Validators.required,Validators.min(8),Validators.max(16),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    license_number: ['',Validators.required],
    gender:['',Validators.required],
    dob: ['',[ Validators.required,this.DateValidator]],
    age:['',Validators.required],
    qualification: ['', Validators.required],
    street: ['', Validators.required],
    city: ['',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    landmark: ['', Validators.required],
    contact_number: ['',Validators.required],
    emergency_contact_number: ['',Validators.required],
    doctor_document: ['', Validators.required],
   });


   selectFile(event) {
    const doctor_document = (event.target as HTMLInputElement).files[0];
    console.log(doctor_document);
    this.registrationForm.get('doctor_document').patchValue(doctor_document);
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

  NewDoctorcredentials: AddDoctor ;
  onSubmit(){
    this.NewDoctorcredentials = this.registrationForm.value;
    this.auth.AddUser(this.NewDoctorcredentials).subscribe(
      () =>{
        this.router.navigateByUrl('/admin/doctor/add-doctor')
        console.log(this.NewDoctorcredentials)
      },
      err =>{
        console.error(err);
        console.log(this.NewDoctorcredentials)
        
      }
    )
  }




  
}
