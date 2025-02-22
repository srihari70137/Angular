import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private EmpUrl="http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient) { }
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.EmpUrl}`);

  }

  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.EmpUrl}`,employee)
  }

}
