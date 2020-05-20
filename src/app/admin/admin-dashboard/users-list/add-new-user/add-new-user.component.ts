import { Component } from '@angular/core';
import { AuthenticationAdminService } from 'src/app/admin/admin-login/authentication-admin.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NewUserDetails } from './new-user-details';
// import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {

  NewUsercredentials: NewUserDetails

  blood_group : string;
  blood_group_list: any = ['A+', 'A-', 'B+','B-', 'AB+', 'AB-','O+', 'O-']


  marital_status: string;
  marital_status_list: any = ['Married', 'Unmarried', 'Widowed','Divorced', 'Separated']

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
  // maxDate =  new Date(new Date().setDate(new Date().getDate()-1))


  selectFile(event) {
    const profile_pic = (event.target as HTMLInputElement).files[0];
    console.log(profile_pic);
    this.registrationForm.get('profile_photo').patchValue(profile_pic);
    this.registrationForm.updateValueAndValidity();
    console.log(this.registrationForm.value);
  }

 


  changeBloodGroup(e) {
    console.log(e.target.value);
    console.log(new Date(this.registrationForm.value.dob))
    // console.log(this.maxDate)
  }
  changeMaritalStatus(e) {
    console.log(e.target.value);
  }
  changeAddressState(e) {
    console.log(e.target.value);
  }


    constructor(public fb:FormBuilder,private auth:AuthenticationAdminService,private router:Router) {}

    registrationForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      father_name:['', Validators.required],
      mother_name:['', Validators.required],
      age:['',[Validators.required,Validators.min(0),Validators.max(110)]],
      contact_number:['',Validators.required],
      emergency_contact_number:['',Validators.required],
      gender:['',Validators.required],
      profile_photo:['',Validators.required],
      blood_group:['',Validators.required],
      dob:['',[Validators.required, this.DateValidator]],
      marital_status:['',Validators.required],
      aadhar_number:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      street:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],
      landmark:['',Validators.required]
     });

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

    
    onSubmit(){
      this.NewUsercredentials = this.registrationForm.value;
      this.auth.AddUser(this.NewUsercredentials).subscribe(
        () =>{
          this.router.navigateByUrl('/admin/dashboard')
          console.log(this.NewUsercredentials)

        },
        err =>{
          console.error(err);
          console.log(this.NewUsercredentials)
          
        }
      )
    }

   
  }