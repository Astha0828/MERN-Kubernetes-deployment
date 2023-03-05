import { getCapstoneDetails } from "../../api/Api";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function CapstoneDetails() {
  const [capstoneDetails, setAllCapstoneDetails] = useState([]);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    getCapstoneDetails(`${cookies.cpid}`)
      .then((res) => {
        console.log(res)
        setAllCapstoneDetails(res.data)
      })
      .catch((err) => console.log(err));
  }, [cookies.cpid]);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <h1>Capstone Details</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Name:
                      </TableCell>
                      <TableCell align="right">
                        {/* {capstoneDetails[0]?.email?.split("@")[0]} */}
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Email:
                      </TableCell>
                      <TableCell align="right">
                        {" "}
                        {capstoneDetails[0].email}
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Capstone Start Date:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstoneStartDate}
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Capstone End Date:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstoneEndDate}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={6}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Capstone Skill required:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstoneSkillRequired}
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Capstone Project Name:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstoneProjectName}
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Overall Status:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].Status}
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        General Remark:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].facultyComment}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
        <h1>More Info</h1>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h4>Submition</h4>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Final Pitch ppt File:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].finalPitchPptFile}
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Final Presentation Marks
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].finalPresentationMarks}
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Project Link:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].projectLink}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={4}>
              <h4>Phase 1 Marks</h4>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Marks
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstonePhaseMarks.Phase1.Marks}
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Status:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstonePhaseMarks.Phase1.Status}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={4}>
              <h4> Phase 2 Marks</h4>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Marks
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstonePhaseMarks.Phase2.Marks}
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Status:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstonePhaseMarks.Phase2.Status}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={4}>
              <h4>Phase 3</h4>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Marks
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstonePhaseMarks.Phase3.Marks}
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Status:
                      </TableCell>
                      <TableCell align="right">
                        {capstoneDetails[0].capstonePhaseMarks.Phase3.Status}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default CapstoneDetails;
