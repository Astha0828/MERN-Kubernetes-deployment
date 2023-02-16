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
        field: "companyName",
        headerClassName: "users-header",
        flex: 1,
        headerName: "Company Name",
        sortable: true,
        // minWidth: 160,
    },
    {
        field: "jobTitle",
        headerName: "Job Title",
        sortable: false,
        // minWidth: 130,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "driveIsFor",
        headerName: "Drive Is For",
        sortable: false,
        // minWidth: 10,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "Segment",
        headerName: "Segment",
        sortable: false,
        // minWidth: 230,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "hrEmailId",
        headerName: "HR Email Id",
        sortable: true,
        // minWidth: 180,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "hrMobileNo",
        headerName: "HR Mobile No",
        sortable: false,
        // minWidth: 150,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "JDfromCompany",
        headerName: "JD from Company",
        sortable: false,
        // minWidth: 100,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "HiringLocation",
        headerName: "Hiring Location",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "isWFHavailable",
        headerName: "WFH",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "minExperience",
        headerName: "Min Exp",
        sortable: false,
        // minWidth: 2,
        headerClassName: "users-header",
        flex: 1,    
    },
    {
        field: "maxExperience",
        headerName: "Max Exp",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "minRelevantYears",
        headerName: "Min Rel Exp",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "maxRelevantYears",
        headerName: "Max Rel Exp",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "minCTC",
        headerName: "Min CTC",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "minInternshipStipend",
        headerName: "Min Internship Stipend",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "maxInternshipStipend",
        headerName: "Max Internship Stipend",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "internshipDuration",
        headerName: "Internship Duration",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "noOfVacancy",
        headerName: "No Of Vacancy",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "lastDateOfApplication",
        headerName: "Last Date Of Application",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
    {
        field: "noOfRecruitmentRound",
        headerName: "No Of Recruitment Round",
        sortable: false,
        // minWidth: 50,
        headerClassName: "users-header",
        flex: 1,
    },
];

const CompanyDatabase = (props) => {
    // const ctx = useContext(DataContext);

    useEffect(() => {

        async function fetchUsers() {
            // let res = await axios.get("http://localhost:3001/student/getstudent")
            let data = [{ _id: 1, companyName:"Google",jobTitle:"Software Engineer", driveIsFor:"B2C",Segment:"Tech",hrEmailId:'hr@gmail.com',hrMobileNo:"1234567890",JDfromCompany:"Yes", HiringLocation:["Mumbai","Pune"],isWFHavailable:true,minExperience:1,maxExperience:5,minRelevantYears:1,maxRelevantYears:3,minCTC:500000, minInternshipStipend:200000, maxInternshipStipend:200000,internshipDuration:1,noOfVacancy:10,lastDateOfApplication:"10/01/2023",noOfRecruitmentRound:2},
            { _id: 2,  companyName: "Amazon",jobTitle:"Software Engineer", driveIsFor:"B2I",Segment:"Non-Tech",hrEmailId:'hr@gmail.com',hrMobileNo:"1234567890",JDfromCompany:"Yes", HiringLocation:["Mumbai","Pune"],isWFHavailable:true,minExperience:1,maxExperience:5,minRelevantYears:1,maxRelevantYears:4,minCTC:400000, minInternshipStipend:200000, maxInternshipStipend:200000,internshipDuration:1,noOfVacancy:10,lastDateOfApplication:"10/01/2023",noOfRecruitmentRound:3},
            { _id: 3, companyName: "Google",jobTitle:"Software Engineer", driveIsFor:"B2I",Segment:"Tech",hrEmailId:'hr@gmail.com',hrMobileNo:"1234567890",JDfromCompany:"No", HiringLocation:["Mumbai","Pune"],isWFHavailable:true,minExperience:1,maxExperience:3,minRelevantYears:5,maxRelevantYears:4,minCTC:900000, minInternshipStipend:200000, maxInternshipStipend:200000,internshipDuration:1,noOfVacancy:10,lastDateOfApplication:"10/01/2023",noOfRecruitmentRound:4},
            { _id: 4, companyName: "MicroSoft",jobTitle:"Software Engineer", driveIsFor:"B2C",Segment:"Non-Tech",hrEmailId:'hr@gmail.com',hrMobileNo:"1234567890",JDfromCompany:"No", HiringLocation:["Mumbai","Pune"],isWFHavailable:true,minExperience:1,maxExperience:4,minRelevantYears:1,maxRelevantYears:3,minCTC:1200000, minInternshipStipend:200000, maxInternshipStipend:200000,internshipDuration:1,noOfVacancy:10,lastDateOfApplication:"10/01/2023",noOfRecruitmentRound:2},
            { _id: 5, companyName: "Hero Vired",jobTitle:"Software Engineer", driveIsFor:"B2I",Segment:"Non-Tech",hrEmailId:'hr@gmail.com',hrMobileNo:"1234567890",JDfromCompany:"Yes", HiringLocation:["Mumbai","Pune"],isWFHavailable:true,minExperience:1,maxExperience:4,minRelevantYears:1,maxRelevantYears:2,minCTC:500000, minInternshipStipend:200000, maxInternshipStipend:200000,internshipDuration:1,noOfVacancy:10,lastDateOfApplication:"10/01/2023",noOfRecruitmentRound:5}]
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
                    rows={10}

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

export default CompanyDatabase;