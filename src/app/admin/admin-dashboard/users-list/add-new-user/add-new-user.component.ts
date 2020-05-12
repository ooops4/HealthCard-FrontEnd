import { Component } from '@angular/core';
import { AuthenticationAdminService } from 'src/app/admin/admin-login/authentication-admin.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
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

  address_state: string;
  address_state_list: any = ['Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana'
    ,'Himachal Pradesh'
    ,'Jammu and Kashmir'
    ,'Jharkhand'
    ,'Karnataka'
    ,'Kerala'
    ,'Lakshadweep'
    ,'Madhya Pradesh'
    ,'Maharashtra'
    ,'Manipur'
    ,'Meghalaya'
    ,'Mizoram'
    ,'Nagaland'
    ,'Odisha'
    ,'Pondicherry'
    ,'Punjab'
    ,'Rajasthan'
    ,'Sikkim'
    ,'Tamil Nadu'
    ,'Telangana'
    ,'Tripura'
    ,'Uttar Pradesh'
    ,'Uttarakhand'
    ,'West Bengal'
    ]
  // maxDate =  new Date(new Date().setDate(new Date().getDate()-1))


  selectFile(event) {
    const profile_pic = (event.target as HTMLInputElement).files[0];
    console.log(profile_pic);
    this.registrationForm.get('profile_photo').patchValue(profile_pic);
    this.registrationForm.updateValueAndValidity();
    console.log(this.registrationForm.value);
  }

  //  youngerThanValidator = (maxAge: number): ValidatorFn => control =>
  // (new Date()).getFullYear() - (new Date(control.value)).getFullYear() > maxAge 
  //   ? { younger: { maxAge } } 
  //   : null;
  


  changeBloodGroup(e) {
    console.log(e.target.value);
  }
  changeMaritalStatus(e) {
    console.log(e.target.value);
  }
  changeAddressState(e) {
    console.log(e.target.value);
  }

  // transformDate(date) {
  //   this.datePipe.transform(myDate, 'yyyy-MM-dd'); //whatever format you need. 
  // }

  // getNowDate() {
  //   //return string
  //   var returnDate = "";
  //   //get datetime now
  //   var today = new Date();
  //   //split
  //   var dd = today.getDate();
  //   var mm = today.getMonth() + 1; //because January is 0! 
  //   var yyyy = today.getFullYear();
  //   //Interpolation date
  //   if (dd < 10) {
  //       returnDate += `0${dd}.`;
  //   } else {
  //       returnDate += `${dd}.`;
  //   }

  //   if (mm < 10) {
  //       returnDate += `0${mm}.`;
  //   } else {
  //       returnDate += `${mm}.`;
  //   }
  //   returnDate += yyyy;
  //   // return returnDate;
  //   console.log(returnDate);
  //   }

    constructor(public fb:FormBuilder,private auth:AuthenticationAdminService,private router:Router) {}

    registrationForm = this.fb.group({
      first_name: ['', [Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
      last_name: ['', [Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      father_name:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
      mother_name:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
      age:['',Validators.required],
      contact_number:['',Validators.required],
      emergency_contact_number:['',Validators.required],
      gender:['',Validators.required],
      profile_photo:['',Validators.required],
      blood_group:['',Validators.required],
      dob:['',Validators.required],
      marital_status:['',Validators.required],
      aadhar_number:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      address_street:['',Validators.required],
      address_city:['',Validators.required],
      address_state:['',Validators.required],
      address_pincode:['',Validators.required],
      address_landmark:['',Validators.required]
     });

  // PasswordValidator(control: AbstractControl): {[key:string]:boolean} | null {
  //   const password = control.get('password');
  //   const confirmPassword = control.get('confirmPassword');
  //   if (password.pristine || confirmPassword.pristine) {
  //     return null;
  //   }
  //   return password && confirmPassword && password.value !== confirmPassword.value? {'mismatch':true} : null;
  
  // }

    
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