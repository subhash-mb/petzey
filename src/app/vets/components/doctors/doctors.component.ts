import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { AddVetService } from '../../services/add-vet.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  idNo: any
  vetDto: any = [];
  message: any

  list:boolean=false;
  card:boolean=true;

  Show:boolean=false;
  visible:boolean=false
  msg: any;
  constructor(private activeRoute: ActivatedRoute, private dto: AddVetService) {

    this.dto.getVetInfo().subscribe(data => { this.vetDto = data; })
  }


 
  deleteId(id: string) {

    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      let profile = this.dto.deleteVetInfo(id)
      profile.subscribe(data => this.message = data)
      console.log(profile);

      alert("Successfully deleted the post");
    }
    else {
      alert("Error deleting");
    }
    
    window.location.reload();
    
  }

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

  display(){
    this.Show=!this.Show;
    this.visible=!this.visible;
  }

 
  
deactivateVets(id:string){

  
  let vetDeactivate=confirm("Are you sure you want to deactivate?");
  if(vetDeactivate)
   {
    let VetDetails=this.dto.deactivateVets(id)
     VetDetails.subscribe(data => this.msg = data)
      console.log(VetDetails);
      alert("Successfully deactivated the vet");
    }
    else{
      alert("Error occured while deactivating");
     }
     window.location.reload();
    }

  ngOnInit(): void {
   
  }

}


