import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";

export const PromotionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <TextInput label="Office Order" source="officeOrder" />
        <DateTimeInput label="Promotion Date" source="promotionDate" />
        <TextInput
          label="Promotion Details"
          multiline
          source="promotionDetails"
        />
      </SimpleForm>
    </Create>
  );
};
