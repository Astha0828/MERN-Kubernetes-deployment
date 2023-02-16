import React from 'react'
import { Box } from '@mui/material';
import { styled } from "@mui/material/styles";
import './placementDashboard.scss'
const PlacementDashboard = () => {
    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <div className='placement-wrapper'>
            <div className='placement-box'>
                <span>Total Entries</span>
                <h2>3869</h2>
            </div>
            <div className='placement-box'>
                <span>Round I</span>
                <h2>3869</h2>
            </div>
            <div className='placement-box'>
                <span>Round II</span>
                <h2>3869</h2>
            </div>
            <div className='placement-box'>
                <span>Round III</span>
                <h2>3869</h2>
            </div>
            <div className='placement-box'>
                <span>Round IV</span>
                <h2>3869</h2>
            </div>
            <div className='placement-box'>
                <span>Total Learners</span>
                <h2>3869</h2>
            </div>
        </div>
      </Box>
        
    )
}

export default PlacementDashboard
