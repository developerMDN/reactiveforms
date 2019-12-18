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
        id: 11111,
        names: 'John Nelson',
        lastnames: 'Rodriguez Garzon'
      },
      {
        id: 222222,
        names: 'Ana Maria',
        lastnames: 'Perez Diaz'
      },
      {
        id: 33333,
        names: 'Juan Carlos',
        lastnames: 'Parra Bohorquez'
      },
      {
        id: 444444,
        names: 'Maria Angelica',
        lastnames: 'Diaz Garzon'
      },
      {
        id: 5555555,
        names: 'Diana Milena',
        lastnames: 'Castro Pardo'
      },
      {
        id: 6666666,
        names: 'Oscar Fernando',
        lastnames: 'Ruiz Prada'
      },
      {
        id: 7777777,
        names: 'Sandra Liliana',
        lastnames: 'Casas Ruiz'
      }
    ];

    return of(employees);

  }
}
