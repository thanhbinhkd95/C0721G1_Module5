import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAttachComponent } from './contract/add-attach/add-attach.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { ListContractAttachComponent } from './contract/list-contract-attach/list-contract-attach.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateServiceComponent } from './inhouse-service/create-service/create-service.component';
import { DeleteServiceComponent } from './inhouse-service/delete-service/delete-service.component';
import { EditServiceComponent } from './inhouse-service/edit-service/edit-service.component';
import { ListServiceComponent } from './inhouse-service/list-service/list-service.component';


const routes: Routes = [
  { path: "employee", component: ListEmployeeComponent },
  { path: "employee/create", component: CreateEmployeeComponent },
  { path: "employee/edit/:id", component: EditEmployeeComponent },
  { path: "employee/delete/:id", component: DeleteEmployeeComponent },
  { path: "customer", component: ListCustomerComponent },
  { path: "customer/create", component: CreateCustomerComponent },
  { path: "customer/edit/:id", component: EditCustomerComponent },
  { path: "customer/delete/:id", component: DeleteCustomerComponent },
  { path: "service", component: ListServiceComponent },
  { path: "service/create", component: CreateServiceComponent },
  { path: "service/edit/:id", component: EditServiceComponent },
  { path: "service/delete/:id", component: DeleteServiceComponent },
  { path: "contract", component: ListContractComponent },
  { path: "contract/create", component: CreateContractComponent },
  { path: "contract/attach/:id", component: AddAttachComponent },
  { path: "contractAttach", component: ListContractAttachComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
