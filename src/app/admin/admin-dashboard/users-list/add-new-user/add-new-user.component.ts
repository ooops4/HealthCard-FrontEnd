import { Component } from '@angular/core';
import { AuthenticationAdminService } from 'src/app/admin/admin-login/authentication-admin.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, MaxLengthValidator, ValidatorFn } from '@angular/forms';
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
      first_name: ['', Validators.required,Validators.minLength(3),Validators.maxLength(15)],
      last_name: ['', Validators.required,Validators.minLength(3),Validators.maxLength(15)],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(16),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      father_name:['',Validators.required,Validators.minLength(3),Validators.maxLength(15)],
      mother_name:['',Validators.required,Validators.minLength(3),Validators.maxLength(15)],
      age:['',[Validators.required,Validators.max(120),Validators.min(0)]],
      contact_number:['',Validators.required, Validators.maxLength(10)],
      emergency_contact_number:['',Validators.required, Validators.maxLength(10)],
      gender:['',Validators.required],
      profile_photo:['',Validators.required],
      blood_group:['',Validators.required],
      dob:['',Validators.required]

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