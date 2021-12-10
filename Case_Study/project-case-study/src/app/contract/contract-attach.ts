import { Contract } from "./contract";
import { Attach } from "./attach";

export interface ContractAttach {
  id?: number;
  contract?: Contract;
  service_attach?: Attach[];
  quantity?: number[];
}
