import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { petDetails } from '../../models/pet-details';
import { AddPetsService } from '../../services/add-pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  // // dataList = [1,2,3,4,5,6,7,8,9,0]; 
  //     tmpData = []; 
      
  //     showMore() {
  //       let newLength = this.petList.length + 3;
  //       if (this.petList.length >0) {
  //           this.tmpData.push(this.petList.(0,3));
  //       }
  //     }
  petId: any;
  petList: any;
  petCard:any=[];
	petAge:any;
	parentName: any;
	parentEmailId: any;
	parentPhoneNumber: any;
	biography: any;
	state: any;
	country: any;
	city: any;
	pincode:any;
  petGender:any;
  breed:any;
  message: any;
//private activeRoute:ActivatedRoute,
  constructor(private pet:AddPetsService,private activeRoute:ActivatedRoute) {this.pet.getPetList().subscribe(data=>{this.petCard=data;})}

  ngOnInit(): void {
    // this.tmpData =this.petList(0,3)
    
    // let petId = this.activeRoute.snapshot.paramMap.get('petId');
    // console.warn(petId);
    // petId&&this.pet.getPetInfo(petId).subscribe(((result: any)=>{
    //   console.warn(result);
    //   this.petInfo = result;
  this.petList= this.pet.getPetList().subscribe(result=>{
    this.petList=result;
  })

  // this.petCard= this.pet.getPetList().subscribe(result=>{
  //   this.petCard=result;
  // })

  }
  list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

  setPetId(petId:any){
    this.petId = petId;
  }
  deletePetId(id:string){
  
    // this.pet.removePetz(this.petId).subscribe(
    //   (error)=>{
    //     alert("deleted unsuccessfully");
    //   },

    //   (result)=>{
    //     console.log(result);
    //     alert("Deleted Successfully");
    //     // this.petId.reset();
    //     const b1=document.getElementById('fnn')?.click();
      
    
      // },
    // )
    // window.location.pathname="pets";
    let deletePost = confirm("Are you sure you want to delete?");
     if (deletePost) {
       let profile = this.pet.removePetz(id)
        profile.subscribe((data: any) => this.message = data)
         console.log(profile);
          alert("Successfully deleted the post"); }
           else {
             alert("Error deleting");
             }
              window.location.reload();

  }

  updateStatus(petStatus: any, petId: Number){
    if(petStatus=="Active"){
      petStatus=true;
    }
    else{
      petStatus=false;
    }
    console.log(petId);
    alert("Updating Pet Status");
    console.log(petStatus);
    this.pet.updatePetStatus(petId).subscribe(
      (result)=>{
        window.location.reload();
        console.log(result);
        alert("Pet status updated successfully.")
      },
      (error)=>{
        console.log(error);
        console.log("Unable to update the status")
      }
    );
  }

}
