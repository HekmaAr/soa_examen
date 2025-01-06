import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ShowDetailsComponent } from './show-details-student/show-details-student.component';
import { AddAddresseComponent } from './add-address/add-address.component';
import { ShowDetailsComponentAddress } from './show-details-address/show-details-address.component';
import { FormsModule } from '@angular/forms';

  

const routes: Routes = [

  {path:"show-all-students",component: StudentListComponent},
  {path:"show-all-address",component: AddressListComponent},
  {path:"add-student", component: AddStudentComponent},
  {path:"add-address", component: AddAddresseComponent},
  {path:'', redirectTo: "show-all-students", pathMatch:"full"},
  {path:'updating-by-id/:id',component:UpdateStudentComponent},
  {path:'details-of-student/:id',component:ShowDetailsComponent},
  // {path:'updating-add-by-id/:id',component:UpdateStudentComponent},
  {path:'details-of-address/:id',component:ShowDetailsComponentAddress},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
