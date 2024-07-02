import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PromotionCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  officeOrder?: string | null;
  promotionDate?: Date | null;
  promotionDetails?: string | null;
};
