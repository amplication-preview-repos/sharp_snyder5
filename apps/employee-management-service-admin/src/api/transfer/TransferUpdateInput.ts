import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TransferUpdateInput = {
  details?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
  fromLocation?: string | null;
  toLocation?: string | null;
  transferDate?: Date | null;
  transferOrder?: string | null;
};
