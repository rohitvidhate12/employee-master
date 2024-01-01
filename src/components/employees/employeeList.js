import React from "react";
import MUIDataTable from "mui-datatables";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton } from "@mui/material";
import { designationList } from "./employeeForm";

const EmployeeList = ({ data, onAdd, onEdit, onDelete }) => {
  const columns = [
    {
      label: "Employee No",
      name: "employeeNo",
      options: {
        sort: false,
        filter: false,
      },
    },
    {
      label: "Employee Name",
      name: "employeeName",
      options: {
        sort: true,
        filter: true,
        customBodyRenderLite: (index) => {
          const user = data[index];
          return `${user?.firstName} ${user?.lastName}`;
        },
      },
    },
    {
      label: "Designation",
      name: "designation",
      options: {
        sort: false,
        filter: true,
        customBodyRenderLite: (index) => {
          const employee = data[index];
          const designation = designationList.find(
            (d) => d.designationId === employee.designationId
          ).designation;
          return <span>{designation}</span>;
        },
      },
    },
    {
      label: "Date of Joining",
      name: "date",
      options: {
        sort: false,
        filter: false,
      },
    },
    {
      label: "Salary (PA)",
      name: "salary",
      options: {
        sort: false,
        filter: false,
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = data[index];
          return (
            <>
              <IconButton color="primary" onClick={() => onEdit(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => onDelete(user)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <Box>
        <Button variant="contained" onClick={onAdd}>
          Add ++
        </Button>
        <MUIDataTable data={data} columns={columns} />
      </Box>
    </>
  );
};

export default EmployeeList;
