import { Promotion } from "../promotion/Promotion";
import { Transfer } from "../transfer/Transfer";

export type Employee = {
  address: string | null;
  cadre: string | null;
  createdAt: Date;
  dateOfAppointmentInTheGazettedGrade: Date | null;
  dateOfAppointmentToThePresentPost: Date | null;
  dateOfBirth: Date | null;
  dateOfInitialAppointment: Date | null;
  dateOfRetirement: Date | null;
  department: string | null;
  email: string | null;
  fatherSName: string | null;
  gender?: "Option1" | null;
  id: string;
  mobileNumber: string | null;
  name: string | null;
  presentDesignation: string | null;
  promotions?: Array<Promotion>;
  totalLengthOfService: number | null;
  transfers?: Array<Transfer>;
  updatedAt: Date;
};
