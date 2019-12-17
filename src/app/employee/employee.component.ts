import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  
    this.employeeForm = this.fb.group({});
  }

}
