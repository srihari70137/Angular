import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees!: Employee[];
  constructor(private employeeService : EmployeeService) {}

  ngOnInit(): void{
    this.getEmployees();
    
  }
  getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data=> {
      this.employees=data;
    });
  }


}
