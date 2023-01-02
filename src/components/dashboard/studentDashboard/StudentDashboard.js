import React from 'react'
import { Box } from '@mui/material';
import { styled } from "@mui/material/styles";
import Chart from "react-apexcharts";
import MainWrapper from "../../mainWrapper/MainWrapper";
import { useEffect } from 'react';
import { getStudentAttendance } from '../../../api/Api';
import { useCookies } from "react-cookie";

const StudentDashboard = () => {
    const [cookies, setCookie] = useCookies();

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));
    const chartData = {
        options: {
          chart: {
            id: "basic-bar"
          },
    
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug" , "Sep" , "Oct", "Nov", "Dec"]
          }
        },
        series: [
          {
            name: "Class Taken",
            data: [30, 40, 45, 50, 49, 60, 70, 91 , 98 , 98 ,23, 45]
          }
        ]
      };

      useEffect(() => {
        getStudentAttendance(cookies.userId)
      }, [])
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <DrawerHeader />
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
            subheader="month wise"
            
              options={chartData.options}
              series={chartData.series}
              type="bar"
              width="800"
            />
          </div>
        </div>
      </div>
      </Box>
  
  );
};

export default StudentDashboard;
