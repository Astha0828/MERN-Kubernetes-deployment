import "./App.css";
import AdminDashboard from "./components/AdminDashboard/adminDashboard";
import Users from "./components/Users/Users";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import { CssBaseline } from "@mui/material";
import Main from "../src/components/SignIn/Main";
import AuthRouter from "./AuthRouter/AuthRouter";
import UserRouter from "./AuthRouter/UserRouter";
// import DataContext from "./context/DataContext";
import DashboardLayout from './layouts/dashboard';

import Router from './routes';
// theme
// import ThemeProvider from './theme';
// components
// import ScrollToTop from './components/scroll-to-top';
// import { StyledChart } from './components/chart';


function App() {



  return (

    // <ThemeProvider>
    // <ScrollToTop />
    // <StyledChart />
    <Router />
//  <DashboardLayout/>
  );
}

export default App;


