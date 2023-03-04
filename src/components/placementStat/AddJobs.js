import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import TextareaAutosize from '@mui/base/TextareaAutosize';



import { createNewBatch } from "../../api/Api";

const theme = createTheme();
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

const AddJobs = () => {
  const [batchName, setBatchName] = useState("");
  const [totalEnroll, setTotalEnroll] = useState("");
  const [startDate, setStartDate] = useState("");
  const [statusActive, setStatusActive] = useState("");
  const [dropout, setDropout] = useState("");
  
  let data = {
    BatchName: batchName,
    TotalEnroll: totalEnroll,
    StartDate: startDate,
    StatusActive: statusActive,
    Dropout: dropout,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewBatch(data).then((res) => console.log(res) , e.target.reset())
    .catch((err) => console.error(err));
    // e.target.reset()
  }
  return (
    <div>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

<DrawerHeader />

<ThemeProvider theme={theme}>
      <Grid container component="main">
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          component={Paper}
          elevation={0}
          square
        >
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="CompanyName"
                label="Company Name"
                name="CompanyName"
                autoComplete="CompanyName"
                autoFocus
                onChange={(e) => setBatchName(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="JobTitle"
                label="Job Title"
                name="JobTitle"
                autoComplete="JobTitle"
                autoFocus
                onChange={(e) => setStartDate(e.target.value)}
              />

              <TextField
                type="number"
                margin="normal"
                required
                fullWidth
                id="Driveisfor"
                label="Drive is for"
                name="Driveisfor"
                autoComplete="Driveisfor"
                autoFocus
                onChange={(e) => setTotalEnroll(e.target.value)}
              />
              
              <TextField
                type="text"
                margin="normal"
                required
                fullWidth
                id="SPOC"
                label="SPOC"
                name="SPOC"
                autoComplete="SPOC"
                autoFocus
                onChange={(e) => setStatusActive(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="PocFromHV"
                label="Poc From HV"
                type="text"
                id="PocFromHV"
                autoComplete="PocFromHV"
                onChange={(e) => setDropout(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Segment"
                label="Segment"
                type="text"
                id="Segment"
                autoComplete="Segment"
                onChange={(e) => setDropout(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="hrEmailId"
                label="HR Email Id"
                type="text"
                id="hrEmailId"
                autoComplete="hrEmailId"
                onChange={(e) => setDropout(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="hrMobileNo"
                label="HR Mobile No."
                type="text"
                id="hrMobileNo"
                autoComplete="hrMobileNo"
                onChange={(e) => setDropout(e.target.value)}
              />
              <TextareaAutosize
                style={{ width: 1200, height: 100 }}
                placeholder="Job Description"
                margin="normal"
                required
                fullWidth
                name="JDfromCompany"
                label="Job Description"
                type="text"
                id="JDfromCompany"
                autoComplete="JDfromCompany"
                onChange={(e) => setDropout(e.target.value)}
              />
              
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Job
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </Box>

    </div>
  )
}

export default AddJobs;