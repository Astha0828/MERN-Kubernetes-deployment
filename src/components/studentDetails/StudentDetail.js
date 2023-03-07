import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  capstoneAttendance,
  capstoneData,
  getSingleStudent,
  markAttendance,
} from "../../api/Api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import "./studentDetails.scss";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

const StudentDetail = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const [value, setValue] = React.useState(null);

  const [getStudent, setGetStudent] = useState([]);
  const [attendance, setAttendance] = useState("Present");
  const [capstoneName, setCapstoneName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sessionDate, setSessionDate] = useState(null);
  const [capstoneAtt, setCapstoneAttendance] = useState("Present");
  const params = useParams();
  //   const getStudentDetails = getSingleStudent(params.id);
  useEffect(() => {
    getSingleStudent(params.id)
      .then((res) => res.data)
      .then((getStudent) => setGetStudent(getStudent))
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const getAttendanceValue = (e) => {
    setAttendance(e.target.value);
  };
  const submitAttendance = () => {
    const attData = {
      studentId: getStudent._id,
      StudentName: getStudent.fullname,
      BatchName: getStudent.batchName,
      attendanceDate: value,
      email: getStudent.email,
      isPresent: attendance === "Present" ? true : false,
    };
    console.log(attData);
    markAttendance(attData)
      .then((res) => res)
      .catch((err) => console.error(err));
  };
  let data = {
    StudentName: getStudent.fullname,
    BatchNumber: getStudent.batchName,
    CourseName: getStudent.courseName,
    CapstoneName: capstoneName,
    StartDate: startDate?.$d.toLocaleString(),
    EndDate: endDate?.$d.toLocaleString(),
  };
  const handleCapstoneSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    capstoneData(data)
      .then((res) => console.log(res), e.target.reset())
      .catch((err) => console.error(err));
    // e.target.reset()
  };
  let capstoneAttendancedata = {
    StudentName: getStudent.fullname,
    CourseName: getStudent.courseName,
    BatchNumber: getStudent.batchName,
    SessionDate: sessionDate?.$d.toLocaleString(),
    Attendance: capstoneAtt,
  };
  const handleCapstoneAttendanceSubmit = (e) => {
    e.preventDefault();
    console.log(capstoneAttendancedata);
    capstoneAttendance(capstoneAttendancedata)
      .then((res) => alert("Attendance marked"))
      .catch((err) => console.error(err));
    // e.target.reset(
  };
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />

      <Card sx={{ minWidth: 275, maxWidth: 540, margin: "auto" }}>
        <CardContent>
          <div className="userDetails-wrapper">
            <div className="user-img">
              <img src={getStudent.userImage} alt="" />
            </div>
            <div className="userDetails">
              <Typography variant="h5" component="div" className="student-name">
                {getStudent.fullname}
              </Typography>
              <Typography variant="body2" className="student-batch">
                {getStudent.batchName}
              </Typography>
              <Typography variant="body2" className="student-contact">
                {getStudent.phoneNo}
              </Typography>
              <Typography variant="body2" className="student-contact">
                {getStudent.email}
              </Typography>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Present"
                  name="radio-buttons-group"
                  onChange={getAttendanceValue}
                >
                  <FormControlLabel
                    value="Present"
                    control={<Radio />}
                    label="Present"
                  />
                  <FormControlLabel
                    value="Absent"
                    control={<Radio />}
                    label="Absent"
                  />
                </RadioGroup>
              </FormControl>
              <Button variant="contained" onClick={submitAttendance}>
                Submit{" "}
              </Button>
            </div>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Paper sx={{ width: 545, margin: "auto", marginTop: 3 }}>
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
            // width: 500,
            // margin: "auto",
            alignItems: "center",
            gap: 2,
          }}
          component="form"
          onSubmit={handleCapstoneSubmit}
        >
          <Typography variant="h4" marginTop={2} color="red">
            Upload Capstone Data
          </Typography>

          <TextField
            type="text"
            margin="normal"
            required
            sx={{ width: 300 }}
            id="CapstoneName"
            label="Capstone Name"
            name="CapstoneName"
            value={capstoneName}
            autoComplete="CapstoneName"
            autoFocus
            onChange={(e) => setCapstoneName(e.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Start Date"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select End Date"
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Upload Data
          </Button>
        </Box>
      </Paper>
      <Paper sx={{ width: 545, margin: "auto", marginTop: 3 }}>
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
            // width: 500,
            // margin: "auto",
            alignItems: "center",
            gap: 2,
          }}
          component="form"
          onSubmit={handleCapstoneAttendanceSubmit}
        >
          <Typography marginTop={2} variant="h4" color="red">
            Capstone Attendance
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Session Date"
              value={sessionDate}
              onChange={(newValue) => {
                setSessionDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Present"
            name="radio-buttons-group"
            onChange={(e) => setCapstoneAttendance(e.target.value)}
          >
            <FormControlLabel
              value="Present"
              control={<Radio />}
              label="Present"
            />
            <FormControlLabel
              value="Absent"
              control={<Radio />}
              label="Absent"
            />
          </RadioGroup>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default StudentDetail;
