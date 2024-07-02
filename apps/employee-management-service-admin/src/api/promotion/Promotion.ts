import { Employee } from "../employee/Employee";

export type Promotion = {
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  officeOrder: string | null;
  promotionDate: Date | null;
  promotionDetails: string | null;
  updatedAt: Date;
};
