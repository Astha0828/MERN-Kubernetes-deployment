import { getStudentPlacementOpportunity } from '../../api/Api';
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

function PlacementDetails({stuid}) {
    console.log("stuid" , stuid)
	const [allOpportunity, setAllOpportunity] = useState([]);
	const [cookies, setCookie] = useCookies();

	useEffect(() => {
		getStudentPlacementOpportunity(`${cookies.studentId}`)
			.then((res) => res.data)
			.then((allOpportunity) => setAllOpportunity(allOpportunity))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	if (!allOpportunity.length) {
		console.log('Not fetched' + allOpportunity.length);
		return <>Cannot Fetch</>;
	} else {
		console.log('fetched' + allOpportunity);
		return (
			<>
				<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
					<DrawerHeader />
					<h1>Complete Details</h1>
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
													Name:
												</TableCell>
												<TableCell align='right'>
													{allOpportunity[0].studentName}
												</TableCell>
											</TableRow>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Email:
												</TableCell>
												<TableCell align='right'>
													{' '}
													{allOpportunity[0].studentEmail}
												</TableCell>
											</TableRow>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Batch:
												</TableCell>
												<TableCell align='right'>
													{allOpportunity[0].studentBatch}
												</TableCell>
											</TableRow>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Internal Round:
												</TableCell>
												<TableCell align='right'>
													{allOpportunity[0].internalRoundStatus
														? 'Cleared'
														: 'Not Cleared'}
												</TableCell>
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
													Qualified Skills:
												</TableCell>
												<TableCell align='right'>
                                                {allOpportunity[0].studentQualifiedSkill.map(skill => <span>{skill} | </span>)}
													{/* {allOpportunity[0].studentQualifiedSkill} */}
												</TableCell>
											</TableRow>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Company Name Applied:
												</TableCell>
												<TableCell align='right'>
													{allOpportunity[0].companyNameApplied.map(company => <span>{company} ,</span>)}
												</TableCell>
											</TableRow>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Overall Status:
												</TableCell>
												<TableCell align='right'>
													{allOpportunity[0].overallStatus}
												</TableCell>
											</TableRow>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													General Remark:
												</TableCell>
												<TableCell align='right'>
													{allOpportunity[0].generalRemark}
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
						</Grid>
					</Box>
					<h1>All Status</h1>
					<Box>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<h4>Application</h4>
								<TableContainer component={Paper}>
									<Table aria-label='simple table'>
										<TableBody>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Job Application Date:
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId
															.applicationDate
													}
												</TableCell>
											</TableRow>

											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Job Application Status:
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId
															.applicationStatus
													}
												</TableCell>
											</TableRow>

											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Job Application Remark:
												</TableCell>
												<TableCell align='right'>
													{allOpportunity[0].allStatus.jobApplicationId.remark}
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
							<Grid item xs={4}>
								<h4>Round 1</h4>
								<TableContainer component={Paper}>
									<Table aria-label='simple table'>
										<TableBody>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Remarks
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId.round1
															.remark
													}
												</TableCell>
											</TableRow>

											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Round Name:
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId.round1
															.roundName
													}
												</TableCell>
											</TableRow>

											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Status:
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId.round1
															.status
													}
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
                            <Grid item xs={4}>
								<h4>Round 2</h4>
								<TableContainer component={Paper}>
									<Table aria-label='simple table'>
										<TableBody>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Remarks
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId.round2
															.remark
													}
												</TableCell>
											</TableRow>

											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Round Name:
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId.round2
															.roundName
													}
												</TableCell>
											</TableRow>

											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Status:
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId.round2
															.status
													}
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
                            <Grid item xs={4}>
								<h4>Round 3</h4>
								<TableContainer component={Paper}>
									<Table aria-label='simple table'>
										<TableBody>
											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Remarks
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId.round3
															.remark
													}
												</TableCell>
											</TableRow>

											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Round Name:
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId.round3
															.roundName
													}
												</TableCell>
											</TableRow>

											<TableRow
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell component='th' scope='row'>
													Status:
												</TableCell>
												<TableCell align='right'>
													{
														allOpportunity[0].allStatus.jobApplicationId.round3
															.status
													}
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
}

export default PlacementDetails;
