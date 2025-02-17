import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService, private routing:AppRoutingModule){}

  onSubmit(){
    this.saveEmployee(this.employee);
  }
  saveEmployee(employee:Employee){
    this.employeeService.createEmployee(employee).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));

  }

  getEmployee(){
    console.log("redirecting to Employee List")
  }
}
