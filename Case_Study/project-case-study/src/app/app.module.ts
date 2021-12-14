import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddAttachComponent } from './contract/add-attach/add-attach.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { ListContractAttachComponent } from './contract/list-contract-attach/list-contract-attach.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { CreateServiceComponent } from './inhouse-service/create-service/create-service.component';
import { ListServiceComponent } from './inhouse-service/list-service/list-service.component';
import { EditServiceComponent } from './inhouse-service/edit-service/edit-service.component';
import { DeleteServiceComponent } from './inhouse-service/delete-service/delete-service.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, AddAttachComponent, CreateContractComponent, ListContractAttachComponent,
    ListContractComponent, DeleteCustomerComponent, CreateCustomerComponent, ListCustomerComponent, EditCustomerComponent,
    CreateEmployeeComponent, ListEmployeeComponent, EditEmployeeComponent, DeleteEmployeeComponent, CreateServiceComponent,
    ListServiceComponent, EditServiceComponent, DeleteServiceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
