import { PromotionCreateNestedManyWithoutEmployeesInput } from "./PromotionCreateNestedManyWithoutEmployeesInput";
import { TransferCreateNestedManyWithoutEmployeesInput } from "./TransferCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  address?: string | null;
  cadre?: string | null;
  dateOfAppointmentInTheGazettedGrade?: Date | null;
  dateOfAppointmentToThePresentPost?: Date | null;
  dateOfBirth?: Date | null;
  dateOfInitialAppointment?: Date | null;
  dateOfRetirement?: Date | null;
  department?: string | null;
  email?: string | null;
  fatherSName?: string | null;
  gender?: "Option1" | null;
  mobileNumber?: string | null;
  name?: string | null;
  presentDesignation?: string | null;
  promotions?: PromotionCreateNestedManyWithoutEmployeesInput;
  totalLengthOfService?: number | null;
  transfers?: TransferCreateNestedManyWithoutEmployeesInput;
};
