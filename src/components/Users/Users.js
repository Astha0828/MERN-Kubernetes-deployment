import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/queries";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, Typography } from "@mui/material";

const columns = [
  {
    field: "user",
    headerClassName: "users-header",
    flex: 1,
    headerName: "Name",
    sortable: true,
    minWidth: 200,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value.image} sx={{ mr: "8px" }} />
          {params.value.name}
        </>
      );
    },
  },
  {
    field: "company",
    headerName: "Company",
    sortable: false,
    minWidth: 250,
    headerClassName: "users-header",
    flex: 1,
  },
  {
    field: "role",
    headerName: "Role",
    sortable: false,
    minWidth: 250,
    headerClassName: "users-header",
    flex: 1,
  },
  {
    field: "verified",
    headerName: "Verified",
    sortable: false,
    minWidth: 130,
    headerClassName: "users-header",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    headerClassName: "users-header",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            display: "inline",
            backgroundColor:
              params.value === "Active"
                ? "rgba(84, 214, 44, 0.16)"
                : "rgba(255, 72, 66, 0.16)",
            color:
              params.value === "Active"
                ? "rgb(34, 154, 22)"
                : "rgb(183, 33, 54)",
            borderRadius: "6px",
            fontSize: "0.75rem",
            fontWeight: "700",
            height: "24px",
            minWidth: "22px",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            padding: "4px 8px",
            fontFamily: "Public Sans, sans-serif",
          }}
        >
          {params.value}
        </Box>
      );
    },
  },
];

const Users = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setListOfUsers(data);
    });
  }, []);

  return (
    <Box sx={{ padding: "30px" }}>
      <Box
        sx={{
          marginTop: 1,
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant='h4' gutterBottom>
          User
        </Typography>
        <Button variant='contained'>+ New User</Button>
      </Box>

      <Box
        sx={{
          height: 450,
          width: "100%",
          "& .users-header": {
            backgroundColor: "#F1F1F1",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            width: "100%",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <TextField
            label='Search user'
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <DataGrid
          sx={{
            width: "100%",
          }}
          rows={listOfUsers}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Users;
