import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component'; 
import { AddAddresseComponent } from './add-address/add-address.component';
import { FormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { AddressListComponent } from './address-list/address-list.component';

import { UpdateStudentComponent } from './update-student/update-student.component';
import { ShowDetailsComponent } from './show-details-student/show-details-student.component';
import { ShowDetailsComponentAddress } from './show-details-address/show-details-address.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    ShowDetailsComponentAddress,
    AddressListComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    ShowDetailsComponent,
    AddAddresseComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,FormsModule,BrowserAnimationsModule , 
    MatFormFieldModule, MatInputModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,
     MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
