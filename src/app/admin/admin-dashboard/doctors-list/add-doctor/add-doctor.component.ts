import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
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
  

  

  

  changeQualification(e) {
    console.log(e.target.value);
  }



  constructor(public fb:FormBuilder,private auth:AuthenticationDoctorService,private router:Router) { }


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
    gender:['',Validators.required],
    qualification:['', Validators.required]
   });





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
