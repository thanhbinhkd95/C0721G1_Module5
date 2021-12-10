import { ServiceType } from "./service-type";

export interface ServiceManager {
  id?: number;
  service_name?: string;
  service_area?: number;
  service_cost?: number;
  service_max_people?: number;
  standard_room?: string;
  description?: string;
  pool_area?: number;
  number_floors?: number;
  service_type?: ServiceType;
}
