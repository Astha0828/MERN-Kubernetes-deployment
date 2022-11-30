import { Card, CardContent, Typography, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import WindowIcon from "@mui/icons-material/Window";
import BugReportIcon from "@mui/icons-material/BugReport";
import { getDashboardData } from "../../api/queries";
import WebsiteVisit from "./websiteVisit";
import CurrentSubject from "./currentSubject";
import CurrentVisit from "./currentVisit";
import ConversionRate from "./conversionRate";
import NewsUpdate from "./newsUpdate";
import Tasks from "./tasks";
import TrafficBySite from "./trafficBySite";
import OrderTimeline from "./orderTimeline";
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FlagIcon from '@mui/icons-material/Flag';
const AdminDashboard = () => {
  const [dashBoardData, setDashboardData] = useState([]);

  useEffect(() => {
    getDashboardData().then((data) => {
      setDashboardData(data);
    });
  }, []);

  function getIcon(type) {
    let icon;
    switch (type) {
      case "Batches":
        icon = <WorkspacesIcon />;
        break;
      case "UserInfo":
        icon = <GroupIcon />;
        break;
      case "AssignmentReport":
        icon = <AssessmentIcon />;
        break;
      case "TicketReports":
        icon = <FlagIcon />;
        break;
      default:
        icon = <BugReportIcon />;
    }
    return icon;
  }

  return (
    <Box>
      <Container
        maxWidth='sm'
        style={{ marginTop: "50px", alignItems: "left" }}
      >
        <Typography variant='h4' gutterBottom>
          Hi, Welcome back
        </Typography>
      </Container>

      <Grid container sx={{ marginBottom: "20px" }}>
        {dashBoardData?.map((d) => {
          return (
            <Grid item xs={3} key={d.name}>
              <Card
                sx={{
                  minWidth: 200,
                  margin: "10px",
                  padding: "24px",
                  backgroundColor: d.color,
                }}
              >
                <CardContent sx={{ alignItems: "center" }}>
                  <IconButton>{getIcon(d.name)}</IconButton>
                  <Typography variant='h3' gutterBottom>
                    {d.value}
                  </Typography>
                  <Typography variant='h6' gutterBottom>
                    {d.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <WebsiteVisit />
          </Grid>
          <Grid item xs={4}>
            <CurrentVisit />
          </Grid>
          <Grid item xs={8}>
            <ConversionRate />
          </Grid>
          <Grid item xs={4}>
            <CurrentSubject />
          </Grid>
          <Grid item xs={8}>
            <NewsUpdate />
          </Grid>
          <Grid item xs={4}>
            <OrderTimeline />
          </Grid>
          <Grid item xs={4}>
            <TrafficBySite />
          </Grid>
          <Grid item xs={8}>
            <Tasks />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;

//create route for user page - clickable button User in admin page.
