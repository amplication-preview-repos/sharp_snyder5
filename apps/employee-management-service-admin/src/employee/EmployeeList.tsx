import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
