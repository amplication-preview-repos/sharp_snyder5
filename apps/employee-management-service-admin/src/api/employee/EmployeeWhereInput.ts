import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromotionListRelationFilter } from "../promotion/PromotionListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TransferListRelationFilter } from "../transfer/TransferListRelationFilter";

export type EmployeeWhereInput = {
  address?: StringNullableFilter;
  cadre?: StringNullableFilter;
  dateOfAppointmentInTheGazettedGrade?: DateTimeNullableFilter;
  dateOfAppointmentToThePresentPost?: DateTimeNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  dateOfInitialAppointment?: DateTimeNullableFilter;
  dateOfRetirement?: DateTimeNullableFilter;
  department?: StringNullableFilter;
  email?: StringNullableFilter;
  fatherSName?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  mobileNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  presentDesignation?: StringNullableFilter;
  promotions?: PromotionListRelationFilter;
  totalLengthOfService?: IntNullableFilter;
  transfers?: TransferListRelationFilter;
};
