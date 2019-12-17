import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const APP_ROUTES: Routes = [
    { path: 'employee', component: EmployeeComponent },
    { path: 'addemployee', component: AddemployeeComponent },
    { path: 'admin', component: AdminComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
