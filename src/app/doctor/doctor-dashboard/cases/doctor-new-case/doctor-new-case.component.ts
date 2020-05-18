import { Component, OnInit } from '@angular/core';
import { NewCaseDetailsModel } from './doctor-new-case-details-model';
import { FormBuilder, Validators, AbstractControl, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-case',
  templateUrl: './doctor-new-case.component.html',
  styleUrls: ['./doctor-new-case.component.css']
})
export class DoctorNewCaseComponent implements OnInit{

  name = localStorage.getItem('name');
  medicine_name: string;
  medicine_dosage: number;
  NewCaseForm: FormGroup;

    constructor(public fb:FormBuilder,private router:Router) {}

  ngOnInit() {

    this.NewCaseForm = this.fb.group({
      medicines : this.fb.array([]),
      disease_name: ['']
     });
    }
    
     addMedicine(){
       const medicine = {
         name: this.medicine_name,
         dosage: this.medicine_dosage,
         isTaken: false
        }
       let getMedicine = this.NewCaseForm.get('medicines') as FormArray
       getMedicine.push(this.fb.control(medicine));
       this.NewCaseForm.updateValueAndValidity();
       this.medicine_name = null;
       this.medicine_dosage = null;
       console.log(this.NewCaseForm.value)
     }
     
     removeMedicine(i){
      let getMedicine = this.NewCaseForm.get('medicines') as FormArray
      getMedicine.removeAt(i);
     }

    
     OnSubmit(){

      
     }
      


} 
