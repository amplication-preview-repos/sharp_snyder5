import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PromotionWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  officeOrder?: StringNullableFilter;
  promotionDate?: DateTimeNullableFilter;
  promotionDetails?: StringNullableFilter;
};
