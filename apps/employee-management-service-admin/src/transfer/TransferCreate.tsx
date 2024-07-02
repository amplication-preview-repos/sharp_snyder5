import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";

export const TransferCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
