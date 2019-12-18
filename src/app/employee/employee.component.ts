import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../model/IEmployee.model';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employees$: Observable<IEmployee[]>;
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

    this.employees$ = this.name.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val as string))
    );

    this.employeeForm.valueChanges.subscribe(data => {
      console.log(data);
      
    });
  }

  private filter(value: string): IEmployee[] {
    if (value) {
      return this.employees
      .filter(e => e.names.toLowerCase()
      .includes(value.toLowerCase())).map(e => e);
    }
  }

  get name()/*: FormControl*/ {
    return this.employeeForm.get('name');
  }

  displayFn(employee): string {
    return employee ? employee.names : employee;
  }

}
