import React, { useEffect, useState, useContext } from "react";
// import { getUsers } from "../../api/queries";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import axios from "axios";
// import DataContext from "../../context/DataContext";
import { GridToolbar } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
const columns = [
    {
        field: "studentName",
        headerClassName: "users-header",
        flex: 1,
        headerName: "Name of Student",
        sortable: true,
        minWidth: 160,
    },
    {
        field: "studentEmail",
        headerName: "Email",
        sortable: false,
        minWidth: 130,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "studentBatch",
        headerName: "Batch",
        sortable: false,
        minWidth: 10,
        headerClassName: "users-header",
    },
    {
        field: "studentQualifiedSkill",
        headerName: "Skills",
        sortable: false,
        minWidth: 230,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "companyNameApplied",
        headerName: "Applied Company",
        sortable: true,
        minWidth: 180,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "overallStatus",
        headerName: "Overall Status",
        sortable: false,
        minWidth: 100,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "applicationStatus",
        headerName: "Application Status",
        sortable: false,
        minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "round",
        headerName: "Ongoing Round",
        sortable: false,
        minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
];

const LearnerPlacementOpportunity = (props) => {
    // const ctx = useContext(DataContext);

    useEffect(() => {

        async function fetchUsers() {
            // let res = await axios.get("http://localhost:3001/student/getstudent")
            let data = [{ _id: 1, studentName: "Swaraj Jadhav", studentEmail:"swaraj@gmail.com",studentBatch:"a-1",studentQualifiedSkill:["React", "JavaScript","Node"], companyNameApplied:"Google", overallStatus: "On Going",applicationStatus:"Accepted",round:3 },
            { _id: 2, studentName: "Swaraj Jadhav",  studentEmail:"swaraj@gmail.com",studentBatch:"a-1",studentQualifiedSkill:["React", "JavaScript","Node"], companyNameApplied: "Amazon", overallStatus: "Not Started", applicationStatus:"Ongoing",round:1 },
            { _id: 3, studentName: "Rishabh Jadhav",  studentEmail:"rishabh@gmail.com",studentBatch:"d-1",studentQualifiedSkill:["React", "JavaScript","Node"], companyNameApplied: "Google", overallStatus: "On Going", applicationStatus:"Accepted",round:2 },
            { _id: 4, studentName: "Rohan Jadhav",  studentEmail:"rohan@gmail.com",studentBatch:"b-1",studentQualifiedSkill:["React", "JavaScript","Node"], companyNameApplied: "MicroSoft", overallStatus: "Not Started", applicationStatus:"Ongoing",round:1 },
            { _id: 5, studentName: "Vishu Jadhav", studentEmail:"vishu@gmail.com",studentBatch:"c-1",studentQualifiedSkill:["React", "JavaScript","Node"],  companyNameApplied: "Hero Vired", overallStatus: "Closed", applicationStatus:"Rejected",round:0 }]
            // console.log(res.data);
            // ctx.setListOfUsers(data);
        }
        fetchUsers()


    }, []);






    return (
        <Box sx={{ padding: "10px" }}>
            <Box
                sx={{
                    marginTop: 4,
                    mb: 5,
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >


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

                </Box>

                <DataGrid

                    columns={columns}
                    // rows={ctx.listOfUsers}

                    getRowId={(row) => row._id}
                    components={{
                        Toolbar: GridToolbar,
                    }}

                // filterModel={{
                //   items: [
                //     {
                //       columnField: {
                //         onChange: (event) => setinput(event.target.value)
                //       },

                //     },

                //   ],
                // }}
                />
            </Box>
        </Box>
    );
};

export default LearnerPlacementOpportunity;