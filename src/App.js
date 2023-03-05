import "./App.scss";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Students from "./components/students/Students";
import Sidebar from "./components/SideBar/sideBar";
import Dashboard from "./components/dashboard/Dashboard";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Faculty from "./components/faculty/Faculty";
import CareerService from "./components/careerService/CareerService";
import UserContext from "./context/UserContext";
import NotFound from "./components/notFound/NotFound";
import Attendance from "./components/attendance/Attendance";
import StudentDetail from "./components/studentDetails/StudentDetail";
import Profile from "./components/profile/Profile";
import { useCookies } from "react-cookie";
import MainWrapper from "./components/mainWrapper/MainWrapper";
import StudentDashboard from "./components/dashboard/studentDashboard/StudentDashboard";
import PlacementDashboard from "./components/placement/dashboard/PlacementDashboard";
import CompanyDatabase from "./components/placementStat/CompanyDatabase"
import LearnerPlacementOpportunity from "./components/placementStat/LearnerPlacementOpportunity"
import AllPlacement from "./components/placementStat/AllPlacement";
import PlacementDetails from "./components/placementStat/PlacementDetails";
import CompanyList from "./components/placementStat/CompanyList";
import JobDetails from "./components/placementStat/JobDetails";
import AddJobs from "./components/placementStat/AddJobs";
import CapstoneProgress from "./components/capstoneProgress/CapstoneProgress";
import CapstoneDetails from "./components/capstoneProgress/CapstoneDetails";
function App() {
  const [cookies, setCookie] = useCookies();
  const ctx = useContext(UserContext);
  const manage = ctx.manage;
  console.log(manage.isLoggedIn);
  const [data, setData] = useState("");
  const getData = (data) => {
    console.log(data);
    setData(data);
  };
  useEffect(() => { }, [data]);

  return (
    <div className='App'>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {(manage.isLoggedIn || cookies.userLogged) && (
          <Sidebar getData={getData} />
        )}

        <Routes>
          {!cookies.userLogged && <Route path='/' element={<Login />} />}

          {!cookies.userLogged ? (
            <Route path='*' element={<NotFound />} />
          ) : (
            <Route path='*' element={<Dashboard />} />
          )}
          {cookies.userType === "student" ? (
            <Route path='/studentDashboard' element={<StudentDashboard />} />
          ) : (
            <Route path='/dashboard' element={<Dashboard />} />
          )}
          {(data === "dashboard" || cookies.userLogged) && (
            <Route path='/dashboard' element={<Dashboard />} />
          )}
          {(data === "students" || cookies.userLogged) && (
            <Route path='/students' element={<Students />} />
          )}
          {/* {cookies.userType === "careerService" ? (
            <Route path='/studentDashboard' element={<StudentDashboard />} />
          ) : (
            <Route path='/dashboard' element={<Dashboard />} />
          )} */}
          {(cookies.userLogged) && (
            <Route path='/allplacement' element={<AllPlacement />} />
          )}
          
          {(data === "faculty" || cookies.userLogged) && (
            <Route path='/faculty' element={<Faculty />} />
          )}
          {(data === "careerServices" || cookies.userLogged) && (
            <Route path='/careerServices' element={<CareerService />} />
          )}
          {(data === "attendance" || cookies.userLogged) && (
            <Route path='/attendance' element={<Attendance />} />
          )}
          {cookies.userLogged && (
            <Route path='/student/:id' element={<StudentDetail />} />
          )}
          {cookies.userLogged && (
            <Route path='/profile' element={<Profile />} />
          )}
          {cookies.userLogged && (
            <Route path='/placementDetails' element={<PlacementDetails />} />
          )}
          {
            cookies.userLogged&&(
              <Route path='/capstoneProgress' element={<CapstoneProgress/>}/>
            )
          }
          {cookies.userLogged && (
            <Route path='/companyList' element={<CompanyList />} />
          )}
          {cookies.userLogged && (
            <Route path='/jobDetails' element={<JobDetails />} />
          )}
          {cookies.userLogged && (
            <Route path='/capstoneDetails' element={<CapstoneDetails/>} />
          )}
          {cookies.userLogged && (
            <Route path='/addjobDetails' element={<AddJobs />} />
          )}
          <Route path='/companydatabase' element={<CompanyDatabase />} />
          <Route path='/learnerplacementopportunity' element={<LearnerPlacementOpportunity />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
