import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


  departmentURL=environment.DepartmentUrl
  vetURL=environment.VetUrl
  constructor(private http: HttpClient){}

  public addDepartment(DepartmentData:any){
    return this.http.post(this.departmentURL+'/petzeydepartment/department/create',DepartmentData);
  }

  public getDepartmentById(id:number){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/departmentbyid/'+id);
  }

  public  editDepartmentById(DepartmentData:any){
    return this.http.put(this.departmentURL+'/petzeydepartment/department/edit',DepartmentData);
  }

  public getAllDepartments(){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/alldepartments');
  }

  public getTotalNumberOfDepartments(){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/totaldepartments');
  }

  public getDepartmentEmailById(id:number){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/departmentmailbyid/'+id);
  }

  public deleteDepartmentById(id:number){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/delete/'+id);
  }

  public getStatusById(id:number){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/departmentstatus/'+id);
  }

  public addDepartmentToVet(vetId:any,departmentId:any){
    let text=vetId.concat("/",departmentId);
    return this.http.put(this.vetURL+'/vet/vet/add/departmentid/'+text+"/",departmentId);
  }

  public getListOfVets(departmentId:number){

    return this.http.get(this.vetURL+'/vet/veiw/vet/departmentId/'+departmentId);
  }
 
}
