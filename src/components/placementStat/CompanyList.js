import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { getCompanyList, getStudentByBatch } from "../../api/Api";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./allplacement.scss";
import UserContext from "../../context/UserContext";
import { useCookies } from "react-cookie";
import PlacementDetails from "./PlacementDetails";

const theme = createTheme();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const CompanyList = () => {
  const [value, setValue] = React.useState(null);
  const [cookies, setCookie] = useCookies();

  const ctx = useContext(UserContext);
  const usrType = cookies.userType;
  // console.log(ctx.manage.userdetails.userType)
  const [getBatch, setgetBatch] = useState([]);
  const [getStudent, setGetStudent] = useState([]);
  const [getBatchDetails, setgetBatchDetails] = useState("All");
  const [allCompany, setAllCompany] = useState([]);
  const [filterStudent, setFilterStudent] = useState(false);
  const navigate = useNavigate();
  const changeHandeler = (e) => {
    setgetBatchDetails(e.target.value);
    setFilterStudent(true);
    const studentList = getStudentByBatch({ batchName: e.target.value });
    studentList
      .then((res) => res.data)
      .then((getStudent) => setGetStudent(getStudent))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    
    getCompanyList()
      .then((res) => res.data)
      .then((allCompany) => setAllCompany(allCompany))
      .catch((err) => {
        console.log(err);
      });
      
  }, []);
  
  const showAllJobs = (id) => {
    console.log(id)
      setCookie("jid", id);
      navigate(`/jobDetails`);
  };
 
  console.log(allCompany)

  return (
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                style={{
                  minWidth: 100 + "%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  justifyContent: "space-between",
                }}
              >
                

                {/* {getBatch && getBatch.map((item) => <div>{item}</div>)} */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            {getBatchDetails === "All" && (
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="left">Company Name</StyledTableCell>
                <StyledTableCell align="left">Job Title</StyledTableCell>
                <StyledTableCell align="left">POC from HV</StyledTableCell>
                <StyledTableCell align="left">SPOC/HR</StyledTableCell>
                <StyledTableCell align="left">HR Email</StyledTableCell>
                <StyledTableCell align="left">HR Mobile No.</StyledTableCell>
                <StyledTableCell align="left">Avg. CTC (lpa)</StyledTableCell>
                <StyledTableCell align="left">No. of Vacancy</StyledTableCell>
                <StyledTableCell align="left">Exp. Req.</StyledTableCell>
                <StyledTableCell align="left">Location</StyledTableCell>
                <StyledTableCell align="left">Last Date</StyledTableCell>

              </TableRow>
            )}
          
          </TableHead>
          <TableBody>
            {filterStudent &&
              getStudent.map((student) => (
                <StyledTableRow
                  className="cursor-pointer"
                  key={student._id}
                  onClick={() => showAllJobs(student.studentId)}
                >
                  <StyledTableCell component="th" scope="row">
                    {student.batchName}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {student.email}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {student.fullname}
                  </StyledTableCell>
                </StyledTableRow>
              ))}

            {getBatchDetails === "All" &&
              allCompany.map((jobs) => (
                <StyledTableRow
                  className="cursor-pointer"
                  key={jobs._id}
                  onClick={() => showAllJobs(jobs.jobApplicationId)}
                >
                  <StyledTableCell component="th" scope="row">
                  
                    {jobs.jobApplicationId}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.companyName}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.jobTitle}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.PocFromHV}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.preferredSPOC}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.hrEmailId}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.hrMobileNo}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.minCTC}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.noOfVacancy}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.minExperience}  - {jobs.maxExperience} 
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.HiringLocation}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {jobs.lastDateOfApplication}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CompanyList;
