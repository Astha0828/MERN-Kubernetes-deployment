import { getJobDetails } from "../../api/Api";
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

function JobDetails() {
    const [jobs, setJobs] = useState([]);
    const [cookies, setCookie] = useCookies();
    const [rounds, setRounds] = useState([])
    

    useEffect(() => {
        getJobDetails(`${cookies.jid}`)
            .then((res) => res.data)
            .then((jobs) => {setJobs(jobs); setRounds(jobs[0].roundDetail)})            
            .catch((err) => {
                console.log(err);
            });

    }, []);
    
    

    if (!jobs.length) {
        return (<>
            Cannot Fetch

        </>)
    } else {
               
        
        return (<>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />

                <h1>Job Details:</h1>
                
                Application Id: {jobs[0].jobApplicationId}<br></br>
                POC from HV: {jobs[0].PocFromHV}<br></br>
                SPOC/HR: {jobs[0].preferredSPOC}
                Company Name: {jobs[0].companyName}<br></br>
                Job Title: {jobs[0].jobTitle}<br></br>
                Drive is for: {jobs[0].driveIsFor}<br></br>
                Segment: {jobs[0].Segment}<br></br>
                HR Email: {jobs[0].hrEmailId}<br></br>
                Mob. No.: {jobs[0].hrMobileNo}<br></br>
                JD: {jobs[0].JDfromCompany}<br></br>
                Hiring Location: {jobs[0].HiringLocation}<br></br>
                WFH: {jobs[0].isWFHavailable ? "Yes" : "No"}<br></br>
                WFH Duration: {jobs[0].WFHDuration}<br></br>
                Min. Exp.: {jobs[0].minExperience}<br></br>
                Max. Exp.: {jobs[0].maxExperience}<br></br>
                Min. Relevant Years: {jobs[0].minRelevantYears}<br></br>
                Max. Relevant Years: {jobs[0].maxRelevantYears}<br></br>
                Min. CTC: {jobs[0].minCTC}<br></br>
                Internship Stipend (INR/month): {jobs[0].minInternshipStipend} - {jobs[0].maxInternshipStipend}<br></br>
                Internship Duration: {jobs[0].internshipDuration}<br></br>
                Variable Component (in CTC): {jobs[0].variableComponentInCTC}<br></br>
                Permissible Notice Period: {jobs[0].permissibleNoticePeriod}<br></br>
                Passout Batch Req.: {jobs[0].passoutBatchReq}<br></br>
                No. of Vacancy: {jobs[0].noOfVacancy}<br></br>
                Last date of application: {jobs[0].lastDateOfApplication}<br></br>
                No. of Recruitment Rounds: {jobs[0].noOfRecruitmentRound}<br></br>
                Remarks: {jobs[0].additionalRemarksFromRecruiter}<br></br>

                <h2>Round Details</h2>
                Note: This will go in tabular format<br></br>
                {/* {
                    for(let i=0;i<jobs[0].noOfRecruitmentRound;i++)
                        "Round": rounds
                } */}
                {/* {console.log(jobs[0].roundDetail)} */}


            </Box>


        </>)
    }

}

export default JobDetails;