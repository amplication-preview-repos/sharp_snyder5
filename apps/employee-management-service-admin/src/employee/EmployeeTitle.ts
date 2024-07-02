import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "fatherSName";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.fatherSName?.toString() || String(record.id);
};
