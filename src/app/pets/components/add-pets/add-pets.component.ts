import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { petDetails } from '../../models/pet-details';
import { AddPetsService } from '../../services/add-pets.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {

  petDetails:petDetails=
    {
		petId: 0,

		petName: "",
		petAge: "",
		petStatus: true,
		parentFName: "",
		parentLName: "",
		parentEmailId: "",
		parentPhoneNumber: "",
		state: "",
		country: "",
		city: "",
		avatar: "",
		pincode: 0,
		breed: "",
		petGender: "",
		biography: ""
	}
   // petDetails: petDetails=new petDetails();
  addedProfile:any
  constructor(private petService:AddPetsService) { }

  ngOnInit(): void {
  }
  
  addForm= new FormGroup({
	petName:new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z]*$')]),
	petAge:new FormControl('', [Validators.required, Validators.minLength(2)]),
	petStatus:new FormControl(''), 
	parentFName:new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z]*$')]),
	parentLName:new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z]*$')]),
	parentEmailId:new FormControl('', [Validators.required, Validators.email]),
	 parentPhoneNumber:new FormControl('', [Validators.required]), 
	petGender:new FormControl('', [Validators.required]),
	state:new FormControl('', [Validators.required, Validators.minLength(2)]),
	 country:new FormControl('', [Validators.required, Validators.minLength(3)]),
	city:new FormControl('', [Validators.required, Validators.minLength(3)]),
	pincode:new FormControl('', [Validators.required]),
	breed:new FormControl('', [Validators.required]),
	biography:new FormControl('', [Validators.required]),
  })
  
// addPet(PetData:NgForm){
//   this.petService.addPet(PetData.value).subscribe(
//   (resp)=>{
//     alert("Pet added successfully");
//     console.log(resp);
//     PetData.reset();
//   },
//   (error)=>{
//     console.log(error);
//   }
// )
  
// }
public addPet(){
//   let res=this.petService.addPetz(this.petDetails);
//   res.subscribe
//   (data=>this.addedProfile=data,
// 	(error)=>{
// 		alert("Getting Data for list view is Unsuccessful");
// 	}
// 	 window.location.reload())
// 	alert("Added successfully");
//   console.log(this.petDetails);
this.petService.addPetz(this.petDetails).subscribe(
	(result)=>{
		window.location.pathname="pets";
		console.log(result);
		console.log("pet added")
	},
	(error)=>{
		console.log(error);
		console.log("unable to add")
	}
	);
}

get petName(){
	return this.addForm.get('petName'); 
}
get parentFName(){
	return this.addForm.get('parentFName'); 
}
get parentLName(){
	return this.addForm.get('parentLName'); 
}

get parentPhoneNumber(){
	return this.addForm.get('parentPhoneNumber'); 
}
get petAge(){
	return this.addForm.get('petAge'); 
}
get parentEmailId(){
	return this.addForm.get('parentEmailId'); 
}
get state(){
	return this.addForm.get('state'); 
}
get city(){
	return this.addForm.get('city'); 
}
get country(){
	return this.addForm.get('city'); 
}
get pincode(){
	return this.addForm.get('pincode'); 
}
get biography(){
	return this.addForm.get('biography'); 
}
get breed(){
	return this.addForm.get('breed'); 
}
get petGender(){
	return this.addForm.get('petGender'); 
}

}
