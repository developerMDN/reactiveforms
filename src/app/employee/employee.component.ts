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
  filteredEmployees: Observable<IEmployee[]>;
  employees: IEmployee[];

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      names: ['']
    });

    this.filteredEmployees = this.names.valueChanges
    .pipe(
      startWith(''),
      map(emp => emp ? this.filter(emp) : this.employees.slice())
    );

    this.service.getEmployees().subscribe(data => {
      this.employees = data;
    });

    this.employeeForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  private filter(value: string): IEmployee[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.employees
        .filter(emp => emp.names.toLowerCase().includes(filterValue));
    }
  }

  get names() {
    return this.employeeForm.get('names');
  }

  displayFn(employee): string {
    return employee ? employee.names : undefined;
  }

}
