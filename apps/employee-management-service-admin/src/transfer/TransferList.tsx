import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const TransferList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transfers"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
