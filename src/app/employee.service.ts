import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEmployee } from './model/IEmployee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Array<IEmployee>> {

    const employee: IEmployee[] = 
    [
      {
        names: 'John Nelson',
        lastnames: 'Rodriguez Garzon'
      },
      {
        names: 'Diana Milena',
        lastnames: 'Rodriguez Beltran'
      },
      {
        names: 'Sandra Maria',
        lastnames: 'Pardo Perez'
      },
      {
        names: 'Luz Angelica',
        lastnames: 'Beltran Maquez'
      },
      {
        names: 'Duver Alberto',
        lastnames: 'Duram Garzon'
      },
      {
        names: 'Carolina',
        lastnames: 'Cardena Achuri'
      },
      {
        names: 'Maria Fernanda',
        lastnames: 'Contreras Zuluaga'
      },
      {
        names: 'Alejandra',
        lastnames: 'Cifuentes Tellez'
      }
    ];

    return of(employee);

  }
}
