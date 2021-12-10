import { ServiceManager } from './../inhouse-service/service-manager';
import { Employee } from "../employee/employee";
import { Customer } from "../customer/customer";


export interface Contract {
  id?: number;
  contract_start_day?: string;
  contract_end_day?: string;
  contract_deposit?: number;
  contract_total_money?: number;
  employee: Employee;
  customer: Customer;
  service: ServiceManager;
}
