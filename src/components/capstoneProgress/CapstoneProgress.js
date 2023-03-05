import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { getAllCapstoneProgress } from "../../api/Api";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "../placementStat/allplacement.scss";
import { useCookies } from "react-cookie";

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
const CapstoneProgress = () => {
  const [cookies, setCookie] = useCookies();
  const [allCapstone, setAllCapstone] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    getAllCapstoneProgress()
      .then((res) => res.data)
      .then((allCapstone) => setAllCapstone(allCapstone))
      .catch((err) => {
        console.log(err);
      });
      
  }, []);
  
  const showCapstoneProgress = (id) => {
    // console.log(id)
      setCookie("cpid", id);
      navigate(`/capstoneDetails`);
  };
 


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
            
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
              <TableRow>
                <StyledTableCell align="left">Student Name</StyledTableCell>
                {/* <StyledTableCell align="left">Batch Name</StyledTableCell> */}
                <StyledTableCell align="left">Capstone Project Name</StyledTableCell>
                <StyledTableCell align="left">Faculty Assigned</StyledTableCell>
                <StyledTableCell align="left">Last Date</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
              </TableRow>
          </TableHead>
          <TableBody>
           {
              allCapstone?.map((data) => (
                <StyledTableRow
                  className="cursor-pointer"
                  key={data._id}
                  onClick={() => showCapstoneProgress(data._id)}
                >
                  <StyledTableCell component="th" scope="row">
                  
                    {data.email.split('@')[0]}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {data.capstoneProjectName}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {data.facultyResponsible}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {data.capstoneEndDate}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {data.Status}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CapstoneProgress;
