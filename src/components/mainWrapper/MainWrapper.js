import React from 'react'
import { Box } from '@mui/material';
import { styled } from "@mui/material/styles";
const MainWrapper = ({childeren}) => {
    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));
  return (
    <div>
<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
     {childeren}
      </Box>

    </div>
  )
}

export default MainWrapper