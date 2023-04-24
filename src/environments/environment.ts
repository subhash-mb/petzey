// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  clinicURL: "https://clinicservice.dev.skillassure.com/clinic",
  dashboardURL: "http://localhost:8081",
  DepartmentUrl:"https://departmentservice.dev.skillassure.com/department",
  VetUrl:"https://vetservice.dev.skillassure.com/vet",
  petUrl:"https://petservice.dev.skillassure.com/pet/pet",
   firebase : {
    apiKey: "AIzaSyCI3zOChykFvesUAKiV5hBWfDDU795iVYM",
    authDomain: "authentication-service-9c9b6.firebaseapp.com",
    projectId: "authentication-service-9c9b6",
    storageBucket: "authentication-service-9c9b6.appspot.com",
    messagingSenderId: "57151664865",
    appId: "1:57151664865:web:9e38670668125cd8d07da0",
    measurementId: "G-QSKG3ES558"
  },
   baseUrl : "https://appointmentservice.dev.skillassure.com/appointment/appointments",
   vetUrl :"http://bt-vet.learn.skillassure.com/vet/vet/viewByVetName",
   clinicUrl : "https://clinicservice.dev.skillassure.com/clinic/clinics/clinic/get/name",
   fetchAllClinics : "https://clinicservice.dev.skillassure.com/clinic/clinics/clinic/get/all",
   fetchAllPets : "https://petservice.dev.skillassure.com/pet/pet/getallpets",
   fetchAllVets : "http://bt-vet.learn.skillassure.com/vet/view/vets" ,
   getDeptById : "https://departmentservice.dev.skillassure.com/department/petzeydepartment/department/departmentbyid/"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
