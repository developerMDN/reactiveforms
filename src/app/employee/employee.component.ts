import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../model/IEmployee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employees: IEmployee[];

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      name: ['']
    });

    this.service.getEmployees().subscribe(data => {
      this.employees = data;
    });


  }

}
