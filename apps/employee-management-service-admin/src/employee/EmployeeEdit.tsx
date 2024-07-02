import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { PromotionTitle } from "../promotion/PromotionTitle";
import { TransferTitle } from "../transfer/TransferTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <TextInput label="Cadre" source="cadre" />
        <DateTimeInput
          label="Date of Appointment in the Gazetted Grade"
          source="dateOfAppointmentInTheGazettedGrade"
        />
        <DateTimeInput
          label="Date of Appointment to the present post"
          source="dateOfAppointmentToThePresentPost"
        />
        <DateTimeInput label="Date of Birth" source="dateOfBirth" />
        <DateTimeInput
          label="Date of Initial Appointment"
          source="dateOfInitialAppointment"
        />
        <DateTimeInput label="Date of Retirement" source="dateOfRetirement" />
        <TextInput label="Department" source="department" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Father's Name" source="fatherSName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Mobile Number" source="mobileNumber" />
        <TextInput label="Name" source="name" />
        <TextInput label="Present Designation" source="presentDesignation" />
        <ReferenceArrayInput
          source="promotions"
          reference="Promotion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PromotionTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Total Length of Service"
          source="totalLengthOfService"
        />
        <ReferenceArrayInput
          source="transfers"
          reference="Transfer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransferTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
