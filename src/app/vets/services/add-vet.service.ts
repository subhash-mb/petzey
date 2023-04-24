import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddVetService {


  constructor(private http:HttpClient) { }

  getVetInfo(){
    let url=`https://vetservice.dev.skillassure.com/vet/vet/view/vets`;
    return this.http.get(url);
  }

  getVetInfoById(id:String){
    return this.http.get(`https://vetservice.dev.skillassure.com/vet/vet/vet/getById/${id}`)
  }

  editVetInfo(updated:any){
    let url=`https://vetservice.dev.skillassure.com/vet/vet/vet/editVetDetails`;
    return this.http.put(url,updated,{responseType: 'text' as 'json'})
  }

  deleteVetInfo(id:String){
    return this.http.delete(`https://vetservice.dev.skillassure.com/vet/vet/vet/deleteVetById/${id}`)

  }

  getCurrentData(id:String){
    return this.http.get(`https://vetservice.dev.skillassure.com/vet/vet/vet/getById/${id}`)
  }

  addVetInfo(vet:any){
    let url1=`https://vetservice.dev.skillassure.com/vet/vet/vet/add`;
    return this.http.post(url1,vet,{responseType: 'text' as 'json'})
  }

  getAppointmentByName(vetName:string)
  {
    return this.http.get(`https://vetservice.dev.skillassure.com/vet/vet/view/appointments/${vetName}`)
  }

  deactivateVets(id:string)
  {
       return this.http.patch(`https://vetservice.dev.skillassure.com/vet/vet/vet/deactivateVet/${id}`,id,{responseType: 'text' as 'json'})
   }


}
