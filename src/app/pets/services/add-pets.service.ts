import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddPetsService {
  public editPet(PetData: any) {
    return this.http.put(this.petURL+`/pet/edit`,PetData);
  }
  constructor(private http:HttpClient) { }
  petURL=environment.petUrl
   public getPetInfoById(petId: string) {
    return this.http.get(`https://petservice.dev.skillassure.com/pet/pet/petid/${petId}`);
  }
  getPetList() {
    return this.http.get(this.petURL+'/getallpets');

  }

  public updatePetStatus( petId: any){
    return this.http.put(this.petURL + '/petId/' + petId + '/update_status/', petId);
  }

  public addPetz(PetData:any) {
  return this.http.post(this.petURL+`/addpet`,PetData);
  }

  public removePetz(PetData:any) {
    return this.http.delete(this.petURL+'/delete/'+PetData);
}

 public deleteVetInfo(id: string) {
   return this.http.delete(this.petURL+`delete/${id}`) }


}
