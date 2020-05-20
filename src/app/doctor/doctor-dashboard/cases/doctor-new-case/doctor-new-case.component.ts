import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-case',
  templateUrl: './doctor-new-case.component.html',
  styleUrls: ['./doctor-new-case.component.css']
})
export class DoctorNewCaseComponent implements OnInit{

 patientID:string 
  // Cartoon:string


  

  
  cartoonsData = [
    'Blood Test',
    'Urine Test',
    'Prothrombin Time',
    'CBC',
    'Lipid Panel',
    'Hemoglobin A1C',
    'Stool Occult Test'
  ];

  // name = localStorage.getItem('name');
  medicine_name: string;
  medicine_dosage: number;
  medicine_quantity: number;
  NewCaseForm: FormGroup;

    constructor(public fb:FormBuilder,private router:Router, private http:HttpClient,private activatedRoute:ActivatedRoute) {
      //to get patientID from url for passing
      this.activatedRoute.paramMap.subscribe((parameter: ParamMap) => {
        if (parameter.has('patientID')) {
          this.patientID = parameter.get('patientID');
          console.log(this.patientID);
        }
      })
     }

    
    onChange(i: number, event) {
      let testcases = this.NewCaseForm.get('test_required') as FormArray
      if(event.target.checked){
        testcases.push(this.fb.control(this.cartoonsData[i]));
      }
      else{
        testcases.removeAt(i);
      }
      console.log(this.NewCaseForm.get('test_required').value);
    }

  ngOnInit() {

    this.NewCaseForm = this.fb.group({
      disease_observation:[''],
      medicines : this.fb.array([]),
      test_required: this.fb.array([]),
      disease_name: ['',Validators.required]
     });
    }
    
     addMedicine(){
       const medicine = {
         medicine_name: this.medicine_name,
         medicine_dosage: this.medicine_dosage,
         medicine_quantity: this.medicine_quantity,
         isTaken: false
        }
       let getMedicine = this.NewCaseForm.get('medicines') as FormArray
       getMedicine.push(this.fb.control(medicine));
       this.NewCaseForm.updateValueAndValidity();
       this.medicine_name = null;
       this.medicine_dosage = null;
       this.medicine_quantity = null;
       console.log(this.NewCaseForm.value)
     }
     
     removeMedicine(i){
      let getMedicine = this.NewCaseForm.get('medicines') as FormArray
      getMedicine.removeAt(i);
     }

    
     OnSubmit(){
       console.log(this.NewCaseForm.value)
      this.http.put(`http://127.0.0.1:5000/api/add-cases/${this.patientID }`,this.NewCaseForm.value).subscribe(response => {
        console.log(response);
      })
     }
      


} 
