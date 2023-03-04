import { getJobDetails } from '../../api/Api';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

function JobDetails() {
	const [jobs, setJobs] = useState([]);
	const [cookies, setCookie] = useCookies();
	const [rounds, setRounds] = useState([]);
	let op = []

	useEffect(() => {
		getJobDetails(`${cookies.jid}`)
			.then((res) => res.data)
			.then((jobs) => {
				setJobs(jobs);
				setRounds(jobs[0].roundDetail);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	if (!jobs.length) {
		return <>Cannot Fetch</>;
	} else {
		console.log(jobs[0])

		for (let i = 0; i < jobs[0].noOfRecruitmentRound; i++) {
			let j = i+1
			let x = 'round'+j
			op.push(<TableRow
				sx={{
					'&:last-child td, &:last-child th': { border: 0 },
				}}>
				<TableCell component='th' scope='row'>
					Round {j}
				</TableCell>
				<TableCell align='right'>{jobs[0].roundDetail[x]}</TableCell>
			</TableRow>);}
			
			return (
				<>
					<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
						<DrawerHeader />
						<h1>Job Details</h1>

						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Application ID
													</TableCell>
													<TableCell align='right'>{jobs[0].jobApplicationId}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														POC from HV
													</TableCell>
													<TableCell align='right'>{jobs[0].PocFromHV}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														SPOC/HR:
													</TableCell>
													<TableCell align='right'>{jobs[0].preferredSPOC}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Company Name:
													</TableCell>
													<TableCell align='right'>{jobs[0].companyName}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														No. of Vacancy
													</TableCell>
													<TableCell align='right'>{jobs[0].noOfRecruitmentRound}</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
								<Grid item xs={6}>

									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Segment
													</TableCell>
													<TableCell align='right'>{jobs[0].Segment}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														HR Email
													</TableCell>
													<TableCell align='right'>{jobs[0].hrEmailId}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Mob. No.
													</TableCell>
													<TableCell align='right'>{jobs[0].hrMobileNo}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Hiring Location
													</TableCell>
													<TableCell align='right'>{jobs[0].HiringLocation}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Drive is for
													</TableCell>
													<TableCell align='right'>{jobs[0].driveIsFor}</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
						</Box>
						<h1>Job Title & Description</h1>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Job Title
													</TableCell>
													<TableCell align='right'>{jobs[0].jobTitle}</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
								<Grid item xs={12}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														{jobs[0].JDfromCompany}
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
						</Box>
						<h1>Qualification</h1>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														WFH
													</TableCell>
													<TableCell align='right'>{jobs[0].isWFHavailable ? 'Yes' : 'No'}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Min. Exp.
													</TableCell>
													<TableCell align='right'>{jobs[0].minExperience}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Min. Relevant Years
													</TableCell>
													<TableCell align='right'>{jobs[0].minRelevantYears}</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
								<Grid item xs={6}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														WFH Duration
													</TableCell>
													<TableCell align='right'>{jobs[0].WFHDuration}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Max. Exp.
													</TableCell>
													<TableCell align='right'>{jobs[0].maxExperience}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Max. Relevant Years
													</TableCell>
													<TableCell align='right'>{jobs[0].maxRelevantYears}</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
						</Box>
						<h1>Compensation, Benefits & Other Requirements</h1>

						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Min. CTC
													</TableCell>
													<TableCell align='right'>{jobs[0].minCTC}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Internship Stipend (INR/month)
													</TableCell>
													<TableCell align='right'>{jobs[0].minInternshipStipend} -{' '}
														{jobs[0].maxInternshipStipend}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Internship Duration
													</TableCell>
													<TableCell align='right'>{jobs[0].internshipDuration}</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>

								<Grid item xs={6}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Variable Component (in CTC)
													</TableCell>
													<TableCell align='right'>{jobs[0].variableComponentInCTC}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Permissible Notice Period
													</TableCell>
													<TableCell align='right'>{jobs[0].permissibleNoticePeriod}</TableCell>
												</TableRow>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Passout Batch Req.
													</TableCell>
													<TableCell align='right'>{jobs[0].passoutBatchReq}</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
						</Box>
						<h1>Last Date & Additional Remarks</h1>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Last date of application
													</TableCell>
													<TableCell align='right'>{jobs[0].lastDateOfApplication}</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
								<Grid item xs={12}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														{jobs[0].additionalRemarksFromRecruiter}
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
						</Box>

						<h1>Round Details</h1>

						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												{op}
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
						</Box>

						{/* {console.log(jobs[0].roundDetail)} */}
					</Box>
				</>
			);
		}
	}


export default JobDetails;
