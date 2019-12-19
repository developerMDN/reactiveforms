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
  filteredEmployeesByName: Observable<IEmployee[]>;
  employees: IEmployee[];

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      names: ['']
    });

    this.filteredEmployeesByName = this.names.valueChanges
      .pipe(
        startWith(''),
        map(emp => emp ? this.filterEmployee(emp) : this.employees.slice())
      );

    this.service.getEmployees().subscribe(data => { this.employees = data; });

    this.employeeForm.valueChanges.subscribe(data => { console.log(data); });
  }

  private filterEmployee(value: any): IEmployee[] {
    let filterValue = '';

    if (typeof value === 'object') {
      filterValue = value.names.toLowerCase();
    } else if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    }

    return this.employees
      .filter(emp => emp.names.toLowerCase().includes(filterValue));
  }

  get names() { return this.employeeForm.get('names'); }

  displayFn(employee?: IEmployee): string | undefined {
    return employee ? employee.names : undefined;
  }
}
