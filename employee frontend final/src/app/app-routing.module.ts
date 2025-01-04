import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { AddressListComponent } from './address-list/address-list.component';


  

const routes: Routes = [

  {path:"show-all-students",component: EmployeeListComponent},
  {path:"show-all-addresses",component: AddressListComponent},
  {path:"add-student", component: AddEmployeeComponent},
  {path:"add-address", component: AddEmployeeComponent},
  {path:'', redirectTo: "show-all-students", pathMatch:"full"},
  {path:'updating-by-id/:id',component:UpdateEmployeeComponent},
  {path:'details-of-student/:id',component:ShowDetailsComponent},
  {path:'updating-add-by-id/:id',component:UpdateEmployeeComponent},
  {path:'details-of-address/:id',component:ShowDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
