import { Component, Input, OnInit } from "@angular/core";
import { AddAppointmentService } from "../../services/add-appointment.service";

import { ActivatedRoute } from "@angular/router";
import { AllAppointmentsService } from "../../services/all-appointments.service";
import { DeleteAppointmentService } from "../../services/delete-appointment.service";

@Component({
  selector: "app-all-appointments",
  templateUrl: "./all-appointments.component.html",
  styleUrls: ["./all-appointments.component.css"],
})
export class AllAppointmentsComponent implements OnInit {
  appinfo: any;
  cardInfo: any;
  appointmentId!: string;

  constructor(
    private addAppointmentsService: AddAppointmentService,
    private allAppointmentsService: AllAppointmentsService,
    private deleteAppointmentService: DeleteAppointmentService
  ) {}

  ngOnInit(): void {
    // Returns a list of appointments in List Format
    this.appinfo = this.allAppointmentsService
      .getAllAppointmentsByList()
      .subscribe((result) => {
        console.log("Data " + result);
        this.appinfo = result;
      });

    // Returns a list of appointments in Card Format
    this.cardInfo = this.allAppointmentsService
      .getAllAppointmentsByCard()
      .subscribe((result) => {
        console.log("Data " + result);
        this.cardInfo = result;
      });
  }

  list: boolean = false;
  card: boolean = true;

  lists() {
    this.list = !this.list;
    this.card = !this.card;
  }
  cards() {
    this.card = !this.card;
    this.list = !this.list;
  }

  deleteAppointment(id: string) {
    this.deleteAppointmentService.deleteById(id);
    this.appinfo = this.allAppointmentsService
      .getAllAppointmentsByList()
      .subscribe((result) => {
        console.log("Data " + result);
        this.appinfo = result;
      });
  }

  cancelAppointment(id: string) {}

  storeAppointmentId(id: string) {
    localStorage.setItem("appointmentId", id);
    console.log("Stored Appointment Id: " + id);
  }
}
