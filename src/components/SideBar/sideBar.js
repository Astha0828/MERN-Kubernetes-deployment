import { Box } from "@mui/system";
import React from "react";
import {
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import {Navigate ,Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import profileImage from "../../images/avatar_default.png";
import userImage from "../../images/illustration_avatar.png";
import BookIcon from "@mui/icons-material/Book";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoDevIcon from "@mui/icons-material/LogoDev";
// import { Link } from "react-router-dom";

const menuItems = [
  {
    name: <Link to="/" style={{textDecoration:"none",color:"black"}}>Dashboard</Link>,
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    name: "User",
    icon: <AccountBoxIcon />,
    path: "/users",
  },
  {
    name: "Batches",
    icon: <ShoppingCartIcon />,
    path: "/batches",
  },
  {
    name: "Assessments",
    icon: <BookIcon />,
    path: "/assessment",
  },
  // {
  //   name: <Link to="/login" style={{textDecoration:"none",color:"black"}}>Login</Link>,
  //   icon: <LockOpenIcon />,
  //   path: "/login",
  // },

];
const sideBar = () => {
  return (
    <Box>
      {/* Logo */}
      <Box sx={{ padding: "24px 20px" }}>
        <IconButton>
          <LogoDevIcon />
        </IconButton>
      </Box>
      {/* Name and profile avatar */}
      <Box
        sx={{
          mb: "40px",
          ml: "20px",
          mr: "20px",
          display: "flex",
          alignItems: "center",
          padding: "16px 20px",
          borderRadius: "10px",
          backgroundColor: "rgba(145, 158, 171, 0.25)",
          width: "80%",
        }}
      >
        <Avatar
          alt='User'
          src={profileImage}
          sx={{ width: "40px", height: "40px" }}
        />
        <Typography
          variant='h6'
          sx={{ ml: "16px", fontSize: "0.875rem", fontWeight: "600" }}
        >
          Admin
        </Typography>
      </Box>

      {/* Navigation items */}
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Upgrade */}
     
    </Box>
  );
};

export default sideBar;

//
