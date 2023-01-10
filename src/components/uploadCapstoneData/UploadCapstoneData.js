import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { capstoneData } from "../../api/Api";

const theme = createTheme();

const UploadCapstoneData = () => {
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [capstoneName, setCapstoneName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  let data = {
    StudentName: studentName,
    CourseName: courseName,
    BatchNumber: batchNumber,
    CapstoneName: capstoneName,
    StartDate: startDate,
    EndDate: endDate,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    capstoneData(data)
      .then((res) => console.log(res), e.target.reset())
      .catch((err) => console.error(err));
    // e.target.reset()
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container component='main'>
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
                component='form'
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='StudentName'
                  label='Student Name'
                  name='StudentName'
                  autoComplete='StudentName'
                  autoFocus
                  onChange={(e) => setStudentName(e.target.value)}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='CourseName'
                  label='Course Name'
                  name='CourseName'
                  autoComplete='CourseName'
                  autoFocus
                  onChange={(e) => setCourseName(e.target.value)}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='BatchNumber'
                  label='Batch Number'
                  name='BatchNumber'
                  autoComplete='BatchNumber'
                  autoFocus
                  onChange={(e) => setBatchNumber(e.target.value)}
                />
                <TextField
                  type='text'
                  margin='normal'
                  required
                  fullWidth
                  id='CapstoneName'
                  label='Capstone Name'
                  name='CapstoneName'
                  autoComplete='CapstoneName'
                  autoFocus
                  onChange={(e) => setCapstoneName(e.target.value)}
                />

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='StartDate'
                  label='Start Date'
                  name='StartDate'
                  autoComplete='StartDate'
                  autoFocus
                  onChange={(e) => setStartDate(e.target.value)}
                />

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='EndDate'
                  label='EndDate'
                  type='text'
                  id='passwEndDate'
                  autoComplete='current-password'
                  onChange={(e) => setEndDate(e.target.value)}
                />

                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Upload Data
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default UploadCapstoneData;
