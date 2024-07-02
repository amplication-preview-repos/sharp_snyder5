import { Employee } from "../employee/Employee";

export type Transfer = {
  createdAt: Date;
  details: string | null;
  employee?: Employee | null;
  fromLocation: string | null;
  id: string;
  toLocation: string | null;
  transferDate: Date | null;
  transferOrder: string | null;
  updatedAt: Date;
};
