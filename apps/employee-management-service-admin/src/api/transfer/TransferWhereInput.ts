import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransferWhereInput = {
  details?: StringNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  fromLocation?: StringNullableFilter;
  id?: StringFilter;
  toLocation?: StringNullableFilter;
  transferDate?: DateTimeNullableFilter;
  transferOrder?: StringNullableFilter;
};
