import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";

export const PromotionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
