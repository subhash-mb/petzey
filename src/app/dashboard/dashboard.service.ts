import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  //URLS
  dashboardURL=environment.dashboardURL;
  urlVetCount = 'https://vetservice.dev.skillassure.com/vet/vet/view/getCount'
  urlPetCount = 'https://petservice.dev.skillassure.com/pet/pet/petCount'
  urlTakeUp = `https://appointmentservice.dev.skillassure.com/appointment/appointments/appointment/takeup/`
  urlTotalAppointment = 'https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/total'
  urlApprovedAppointments = 'https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/approved'
  urlPendingAppointments = 'https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/pending'
  urlCancelledAppointments = 'https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/cancelled'
  urlUpcomingAppointments = 'https://appointmentservice.dev.skillassure.com/appointment/appointments/view/upcoming'
  urlAppointmnetDto = 'https://appointmentservice.dev.skillassure.com/appointment/appointments/dashboard/dto'
  urlViewVets= 'https://vetservice.dev.skillassure.com/vet/vet/view/vets'
  urlCompletedAppointments='https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/completed'

  constructor(private http: HttpClient) {

  }

 getListOfVet(){

  return this.http.get(this.urlViewVets);

  }



//  getPetDepartment(){

//   return this.http.get(this.dashboardURL+'/petzeydepartment/department/alldepartments');

//   }



  getTotalVets(){

    return this.http.get(this.urlVetCount);

  }

  getTotalPets(){

    return this.http.get(this.urlPetCount);



  }

  takeUp(id: string){
    console.log("APPROVED")
    return this.http.put(this.urlTakeUp+id,null);
  }

  gettotalAppointmentCount(){

    return this.http.get(this.urlTotalAppointment);

  }

  getapprovedAppointmentsCount(){

    return  this.http.get(this.urlApprovedAppointments);

  }

  getpendingAppointmentsCount(){

    return this.http.get(this.urlPendingAppointments);

  }

  getcancelledAppointmentsCount() {

    return this.http.get(this.urlCancelledAppointments);


  }
  getPendingAppointmentsForDashboard() {
    return this.http.get(this.urlAppointmnetDto);
  }

  getCompletedAppointments() {
    return this.http.get(this.urlCompletedAppointments);

  }
}

