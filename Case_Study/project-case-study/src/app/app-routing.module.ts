import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';


const routes: Routes = [
  { path: "employee", component: ListEmployeeComponent },
  { path: "employee/create", component: CreateEmployeeComponent },
  { path: "employee/edit/:id", component: EditEmployeeComponent },
  { path: "employee/delete/:id", component: DeleteEmployeeComponent },
  { path: "customer", component: ListCustomerComponent },
  { path: "customer/create", component: CreateCustomerComponent },
  { path: "customer/edit/:id", component: EditCustomerComponent },
  { path: "customer/delete/:id", component: DeleteCustomerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
