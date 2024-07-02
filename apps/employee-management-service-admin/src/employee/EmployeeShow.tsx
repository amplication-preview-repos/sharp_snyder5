import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Cadre" source="cadre" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="Date of Appointment in the Gazetted Grade"
          source="dateOfAppointmentInTheGazettedGrade"
        />
        <TextField
          label="Date of Appointment to the present post"
          source="dateOfAppointmentToThePresentPost"
        />
        <TextField label="Date of Birth" source="dateOfBirth" />
        <TextField
          label="Date of Initial Appointment"
          source="dateOfInitialAppointment"
        />
        <TextField label="Date of Retirement" source="dateOfRetirement" />
        <TextField label="Department" source="department" />
        <TextField label="Email" source="email" />
        <TextField label="Father's Name" source="fatherSName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Mobile Number" source="mobileNumber" />
        <TextField label="Name" source="name" />
        <TextField label="Present Designation" source="presentDesignation" />
        <TextField
          label="Total Length of Service"
          source="totalLengthOfService"
        />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Promotion"
          target="employeeId"
          label="Promotions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Office Order" source="officeOrder" />
            <TextField label="Promotion Date" source="promotionDate" />
            <TextField label="Promotion Details" source="promotionDetails" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transfer"
          target="employeeId"
          label="Transfers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Details" source="details" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="From Location" source="fromLocation" />
            <TextField label="ID" source="id" />
            <TextField label="To Location" source="toLocation" />
            <TextField label="Transfer Date" source="transferDate" />
            <TextField label="Transfer Order" source="transferOrder" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
