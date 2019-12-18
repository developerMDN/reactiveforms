import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdminComponent } from './admin/admin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { APP_ROUTING } from './app.routing';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MatButtonModule,  MatInputModule, MatAutocompleteModule  } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({  
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddemployeeComponent,
    AdminComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
