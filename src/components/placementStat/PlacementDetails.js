import { getStudentPlacementOpportunity } from "../../api/Api";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

function PlacementDetails() {
    const [allOpportunity, setAllOpportunity] = useState([]);
    const [cookies, setCookie] = useCookies();
    

    useEffect(() => {
        getStudentPlacementOpportunity(`${cookies.sid}`)
            .then((res) => res.data)
            .then((allOpportunity) => setAllOpportunity(allOpportunity))
            .catch((err) => {
                console.log(err);
            });

    }, []);

    if (!allOpportunity.length) {
        console.log("Not fetched" + allOpportunity.length)
        return (<>
            Cannot Fetch

        </>)
    } else {
        console.log("fetched" + allOpportunity.length)
        return (<>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />

                <h1>Complete Details:</h1>
                Name: {allOpportunity[0].studentName}<br></br>

                Email: {allOpportunity[0].studentEmail}<br></br>
                Batch: {allOpportunity[0].studentBatch}<br></br>
                Internal Round: {allOpportunity[0].internalRoundStatus ? "Cleared" : "Not Cleared"}<br></br>
                Qualified Skills: {allOpportunity[0].studentQualifiedSkill}<br></br>
                Company Name Applied: {allOpportunity[0].companyNameApplied}<br></br>
                Overall Status: {allOpportunity[0].overallStatus}<br></br>
                General Remark: {allOpportunity[0].generalRemark}<br></br>

                <h2>All Status</h2>
                Note: This will go in tabular format<br></br>
                {/* Job Application ID: {allOpportunity[0].allStatus.jobApplicationId.applicationDate}<br></br> */}


            </Box>


        </>)
    }

}

export default PlacementDetails;