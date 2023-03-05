import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Alert, Autocomplete, FormControl, InputLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { capstoneAttendance, getAllStudent, getAllBatch } from "../../api/Api";
import { useEffect } from "react";
const theme = createTheme();


const CapstoneAttendance = () => {
  const [studentName, setStudentName] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [batchNumber, setBatchNumber] = useState(null);
  const [sessionDate, setSessionDate] = useState(null);
  const [attendance, setAttendance] = useState("");
  const [options, setOptions] = useState([]);
  const [batchOptions, setBatchOptions] = useState([]);

  let data = {
    StudentName: studentName,
    CourseName: courseName,
    BatchNumber: batchNumber,
    SessionDate: sessionDate,
    Attendance: attendance,
  };
  useEffect(() => {
    getAllStudent(data)
      .then((res) => {
        const studentNames = res.data?.map((ele) => {
          return ele.username;
        });
        // console.log(res)
        setOptions(studentNames);
      })
      .catch((err) => console.error(err));
    getAllBatch(data)
      .then((res) => {
        const batchNames = res.data?.map((ele) => {
          return ele.BatchName;
        });
        setBatchOptions(batchNames);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    capstoneAttendance(data)
      .then((res) => alert("Attendance marked"))
      .catch((err) => console.error(err));
    // e.target.reset()
  };
  return (

    <div>
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
                component='form'
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
                >
                <Autocomplete
                  options={options}
                  renderInput={(params) => (
                    <TextField {...params} label="Student username" />
                    )}
                    value={studentName}
                    onChange={(e, newvalue) => setStudentName(newvalue)}
                    />
                {/* <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='StudentName'
                  label='Student Name'
                  name='StudentName'
                  autoComplete='StudentName'
                  autoFocus
                  onChange={(e) => setStudentName(e.target.value)}
                /> */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="CourseName"
                  label="Course Name"
                  name="CourseName"
                  autoComplete="CourseName"
                  autoFocus
                  onChange={(e) => setCourseName(e.target.value)}
                  />
                <Autocomplete
                  options={batchOptions}
                  renderInput={(params) => (
                    <TextField {...params} label="Batch Number" />
                    )}
                    value={batchNumber}
                    onChange={(e, newvalue) => setBatchNumber(newvalue)}
                    />
                {/* <TextField
                  type="text"
                  margin="normal"
                  required
                  fullWidth
                  id="BatchNumber"
                  label="Batch Number"
                  name="BatchNumber"
                  autoComplete="BatchNumber"
                  autoFocus
                  onChange={(e) => setBatchNumber(e.target.value)}
                /> */}
               

                {/* <TextField
                  type="number"
                  margin="normal"
                  required
                  fullWidth
                  id="SessionDate"
                  label="Session Date"
                  name="SessionDate"
                  autoComplete="SessionDate"
                  autoFocus
                  onChange={(e) => setSessionDate(e.target.value)}
                /> */}
                <FormControl fullWidth>
                  <InputLabel>Attendance</InputLabel>
                  <Select
                    value={attendance}
                    label="Attendance"
                    onChange={(e) => setAttendance(e.target.value)}
                    >
                    <MenuItem value={"present"}>Present</MenuItem>
                    <MenuItem value={"absent"}>Absent</MenuItem>
                  </Select>
                </FormControl>
                {/* <TextField
                  margin="normal" 
                  required
                  fullWidth
                  id="setAttendance"
                  label="Attended"
                  name="setAttendance"
                  autoComplete="setAttendance"
                  autoFocus
                  onChange={(e) => setAttendance(e.target.value)}
                /> */}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  >
                  Save Attendance
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
                   
  );
};

export default CapstoneAttendance;
