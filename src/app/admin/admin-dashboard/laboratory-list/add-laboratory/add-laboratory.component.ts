import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthenticationLaboratoryService, AddLaboratory } from 'src/app/laboratory/laboratory-login/authentication-Laboratory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-laboratory',
  templateUrl: './add-laboratory.component.html',
  styleUrls: ['./add-laboratory.component.css']
})
export class AddLaboratoryComponent {

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



  constructor(public fb:FormBuilder,private auth:AuthenticationLaboratoryService,private router:Router) { }


  registrationForm = this.fb.group({
    laboratory_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', [Validators.required,Validators.min(8),Validators.max(16),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    license_number: ['',Validators.required],
    established_date: ['',[Validators.required,this.DateValidator]],
    contact_number: ['',Validators.required],
    emergency_contact_number: ['',Validators.required],
    street: ['', Validators.required],
    owner_name: ['', Validators.required],
    city: ['',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    landmark: ['', Validators.required],
    laboratory_document: ['', Validators.required],
   });



   selectFile(event) {
    const laboratory_document = (event.target as HTMLInputElement).files[0];
    console.log(laboratory_document);
    this.registrationForm.get('laboratory_document').patchValue(laboratory_document);
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


  NewLaboratoryCredentials: AddLaboratory;
  onSubmit(){
    this.NewLaboratoryCredentials = this.registrationForm.value;
    this.auth.AddLaboratory(this.NewLaboratoryCredentials).subscribe(
      () =>{
        this.router.navigateByUrl('/admin/laboratory/add-laboratory')
        console.log(this.NewLaboratoryCredentials)
      },
      err =>{
        console.error(err);
        console.log(this.NewLaboratoryCredentials)
        
      }
    )
  }  
}