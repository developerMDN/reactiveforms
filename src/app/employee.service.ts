import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEmployee } from './model/IEmployee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Array<IEmployee>> {

    const employees: IEmployee[] = [
      {
        names: 'John Nelson',
        lastnames: 'Rodriguez Garzon'
      },
      {
        names: 'Ana Maria',
        lastnames: 'Perez Diaz'
      },
      {
        names: 'Juan Carlos',
        lastnames: 'Parra Bohorquez'
      },
      {
        names: 'Maria Angelica',
        lastnames: 'Diaz Garzon'
      },
      {
        names: 'Diana Milena',
        lastnames: 'Castro Pardo'
      },
      {
        names: 'Oscar Fernando',
        lastnames: 'Ruiz Prada'
      },
      {
        names: 'Sandra Liliana',
        lastnames: 'Casas Ruiz'
      }
    ];

    return of(employees);

  }
}
