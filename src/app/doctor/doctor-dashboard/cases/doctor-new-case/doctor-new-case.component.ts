import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-case',
  templateUrl: './doctor-new-case.component.html',
  styleUrls: ['./doctor-new-case.component.css']
})
export class DoctorNewCaseComponent implements OnInit{

  // Cartoon:string
  
  cartoonsData = [
    { id: 0, name: 'Tom and Jerry' },
    { id: 1, name: 'Rick and Morty' },
    { id: 2, name: 'Ben 10' },
    { id: 3, name: 'Batman: The Animated Series' }
  ];

  name = localStorage.getItem('name');
  medicine_name: string;
  medicine_dosage: number;
  NewCaseForm: FormGroup;

    constructor(public fb:FormBuilder,private router:Router, private http:HttpClient) {}
    onChange(name: string, isChecked: boolean) {
      const cartoons = (this.NewCaseForm.controls.name as FormArray);
  
      if (isChecked) {
        cartoons.push(new FormControl(name));
      } else {
        const index = cartoons.controls.findIndex(x => x.value === name);
        cartoons.removeAt(index);
      }
    }

  ngOnInit() {

    this.NewCaseForm = this.fb.group({
      medicines : this.fb.array([]),
      name: this.fb.array([]),
      disease_name: ['',Validators.required]
     });
    }
    
     addMedicine(){
       const medicine = {
         medicine_name: this.medicine_name,
         medicine_dosage: this.medicine_dosage,
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
       console.log(this.NewCaseForm.value)
      this.http.post(`http://127.0.0.1:5000/api/add-cases`,this.NewCaseForm.value).subscribe(response => {
        console.log(response);
      })
     }
      


} 
