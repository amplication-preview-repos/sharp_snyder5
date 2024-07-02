import { SortOrder } from "../../util/SortOrder";

export type PromotionOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  officeOrder?: SortOrder;
  promotionDate?: SortOrder;
  promotionDetails?: SortOrder;
  updatedAt?: SortOrder;
};
