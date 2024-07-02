import { SortOrder } from "../../util/SortOrder";

export type TransferOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  employeeId?: SortOrder;
  fromLocation?: SortOrder;
  id?: SortOrder;
  toLocation?: SortOrder;
  transferDate?: SortOrder;
  transferOrder?: SortOrder;
  updatedAt?: SortOrder;
};
