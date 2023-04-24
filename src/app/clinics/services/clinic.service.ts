import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  clinicURL = environment.clinicURL;
  constructor(private http: HttpClient) { }

  public addClinic(ClinicData: any) {
    return this.http.post(this.clinicURL + '/clinics/create/clinic', ClinicData);
  }

  public getClinics() {
    return this.http.get(this.clinicURL + '/clinics/clinic/get/all');
  }

  public deleteClinic(id: number){
    return this.http.delete(this.clinicURL + '/clinics/clinic/' + id + '/remove');
  } 

  public updateClinic(ClinicData: any) {
    return this.http.put(this.clinicURL + '/clinics/clinic/update', ClinicData);
  }

  public getClinicByName(name: string) {
    return this.http.get(this.clinicURL + '/clinics/clinic/get/name/'+ name);
  }

  public updateClinicStatus(status: string, id: number) {
    return this.http.put(this.clinicURL + '/clinics/clinic/' + id + '/status/' + status, null);
  } 
}
