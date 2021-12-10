import { CustomerType } from "./customer-type";

export interface Customer {
  id?: number;
  customer_code?: string;
  customer_name?: string;
  customer_birthday?: string;
  customer_gender?: number;
  customer_idCard?: string;
  customer_phone?: string;
  customer_email?: string;
  customer_address?: string;
  customer_type?: CustomerType;
}
