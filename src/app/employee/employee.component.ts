import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({});

    this.service.getEmployees().subscribe(
      data => {
        console.log(data);
      }
    );

  }

}
