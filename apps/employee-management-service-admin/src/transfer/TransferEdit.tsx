import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";

export const TransferEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Details" multiline source="details" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <TextInput label="From Location" source="fromLocation" />
        <TextInput label="To Location" source="toLocation" />
        <DateTimeInput label="Transfer Date" source="transferDate" />
        <TextInput label="Transfer Order" source="transferOrder" />
      </SimpleForm>
    </Edit>
  );
};
