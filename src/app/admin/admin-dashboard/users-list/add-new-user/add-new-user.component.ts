import { Component } from '@angular/core';
import { AuthenticationAdminService, AdminTokenPayload } from 'src/app/admin/admin-login/authentication-admin.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NewUserDetails } from './new-user-details';


@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {
 

    constructor(public fb:FormBuilder,private auth:AuthenticationAdminService,private router:Router) {}

    registrationForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required,Validators.min(8),Validators.max(16),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      father_name:['',Validators.required],
      mother_name:['',Validators.required],
      age:['',[Validators.required,Validators.max(120),Validators.min(0)]],
      contact_number:['',Validators.required],
      emergency_contact_number:['',Validators.required],
      gender:['',Validators.required]
     });

  NewUsercredentials: NewUserDetails = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    contact_number:'' ,
    emergency_contact_number:'',
    father_name:'',
    mother_name:''
  }

 
    
   
  
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
          this.router.navigateByUrl('/admin-dashboard')
          console.log(this.NewUsercredentials)
        },
        err =>{
          console.error(err);
          console.log(this.NewUsercredentials)
          
        }
      )
    }

   
  }