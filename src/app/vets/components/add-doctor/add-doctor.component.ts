import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { vetDetails } from '../../models/vet-details';
import { AddVetService } from '../../services/add-vet.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  adddetails: vetDetails = {
    npiNo: 0,
    firstName: '',
    lastName: '',
    department: '',
    email: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    mobileNo: 0,
    shortBiography: '',
    status: true,
    avatar: '',
    userName: '',
    dob: '',
    clinic: '',
    country: '',
    departmentId: 0
  }

  vetData:any;

  constructor(private addservice: AddVetService, private router: Router) { }

  addForm = new FormGroup({
    npiNo: new FormControl(''),
    firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lastName: new FormControl(''),
    department: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required , Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    gender: new FormControl(''),
    address: new FormControl('',[Validators.required]),
    city: new FormControl(''),
    state: new FormControl(''),
    mobileNo: new FormControl('',[Validators.required ,Validators.minLength(10),Validators.pattern("[6-9]{1}[0-9]{9}")]),
    shortBiography: new FormControl('',[Validators.required,Validators.maxLength(250)]),
    status: new FormControl(''),
    avatar: new FormControl(''),
    userName: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required,Validators.pattern("[0-9]{2}[-]{1}[0-9]{2}[-]{1}[0-9]{4}")]),
    clinic: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    departmentId: new FormControl(''),
  })


  ngOnInit(): void {
  }

  public addVet(){
     let vet=this.addservice.addVetInfo(this.adddetails);
     vet.subscribe((data)=>{
     this.router.navigate(['/vets']);
     console.log(data);
    },
    (error)=>
    { console.log("Unable to add");
  });
}

  public confirm() {
    alert("The data has been Submitted")

  }

}
