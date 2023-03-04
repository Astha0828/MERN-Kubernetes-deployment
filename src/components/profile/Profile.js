import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UserContext from '../../context/UserContext';
import {
	getSingleStudent,
	getAttendanceCount,
} from '../../api/Api';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useCookies } from 'react-cookie';
import './Profile.scss';
import { Button } from '@mui/material';
import EditProfile from './EditProfile';
import ReactApexChart from 'react-apexcharts';
import PlacementDetails from '../placementStat/PlacementDetails';
const Profile = () => {
	const [getStudent, setGetStudent] = useState([]);
	const [getAttendance, setAttendance] = useState([]);
	const [cookies, setCookie] = useCookies();
	const [editField, setEditField] = useState(false);
	const [data] = useState(true);
	const ctx = useContext(UserContext);
	const userId = ctx.studentId;

	let attn = []
	
	const [obj, setObject] = useState({
		series: [1, 1],
		options: {
			colors: ['#299617', '#DC143C'],
			chart: {
				width: 380,
				type: 'pie',
			},
			labels: ['Present', 'Absent'],
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	});

	const DrawerHeader = styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	}));
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));
	console.log("userId" , cookies.studentId)
	useEffect(() => {
		getSingleStudent(`${cookies.studentId}`)
			.then((res) => res.data)
			.then((getStudent) => {
				setGetStudent(getStudent);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [userId , editField]);

	useEffect(() => {
		getTotalAttendance();
	}, [userId]);

	const getTotalAttendance = () => {
		getAttendanceCount(`${cookies.studentId}`)
			.then((res) => res.data)
			.then((getAttendance) => setAttendance(getAttendance));
				};
	const editProfile = (data) => {
		console.log(data)
		setEditField(data);
	};
	if(getAttendance.data){
		console.log(getAttendance.data[0])
		attn.push(getAttendance.data[0].totalAttendance, getAttendance.data[0].absent, getAttendance.data[0].present)
		
	}	

	return (
		<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
			<DrawerHeader />
			{!editField && (
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={5}>
							<Item className='profile-card'>
								<div className='profile-wrapper'>
									<div className='user-img'>
										<img src={getStudent.userImage} alt='' />
									</div>
									<div className='profile-details'>
										<h3>{getStudent.fullname} , ({getStudent.username})</h3>
										<h3>{getStudent.email}</h3>
										<h3>{getStudent.phoneNo}</h3>
										<h3>{getStudent.courseName}</h3>
									</div>
								</div>
							</Item>
						</Grid>
						<Grid item xs={7}>
							<TableContainer component={Paper}>
								<Table aria-label='simple table'>
									<TableBody>
										<TableRow
											sx={{
												'&:last-child td, &:last-child th': { border: 0 },
											}}>
											<TableCell component='th' scope='row'>
												Qualification
											</TableCell>
											<TableCell align='right'>
												{getStudent.qualification}
											</TableCell>
										</TableRow>
										<TableRow
											sx={{
												'&:last-child td, &:last-child th': { border: 0 },
											}}>
											<TableCell component='th' scope='row'>
												Batch Name
											</TableCell>
											<TableCell align='right'>
												{getStudent.batchName}
											</TableCell>
										</TableRow>
										<TableRow
											sx={{
												'&:last-child td, &:last-child th': { border: 0 },
											}}>
											<TableCell component='th' scope='row'>
												Working Status
											</TableCell>
											<TableCell align='right'>
												{getStudent.workingStatus}
											</TableCell>
										</TableRow>
										<TableRow
											sx={{
												'&:last-child td, &:last-child th': { border: 0 },
											}}>
											<TableCell component='th' scope='row'>
												Total Experience
											</TableCell>
											<TableCell align='right'>
												{' '}
												{getStudent.yearOfExp}
											</TableCell>
										</TableRow>

										<TableRow
											sx={{
												'&:last-child td, &:last-child th': { border: 0 },
											}}>
											<TableCell component='th' scope='row'>
												Current CTC
											</TableCell>
											<TableCell align='right'>
												{' '}
												{getStudent.currentCTC}
											</TableCell>
										</TableRow>

										<TableRow
											sx={{
												'&:last-child td, &:last-child th': { border: 0 },
											}}>
											<TableCell
												colSpan={2}
												component='th'
												scope='row'
												align='center'>
												<Button variant='outlined' onClick={editProfile}>
													Edit
												</Button>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</Grid>
					</Grid>

					<Grid container spacing={2} className='grid-wrapper'>
						<Grid item xs={6}>
							<Item>
								<div className='chart-wrapper'>
									<h3>Class Attendance</h3>
									<ReactApexChart
													options={obj.options}
													series={[attn[1], attn[2]]}
													type='pie'
													width={380}
												/>
									
								</div>
							</Item>
						</Grid>
						<Grid item xs={6}>
							<Item>xs=4</Item>
						</Grid>
					</Grid>
				</Box>
			)}

			{editField && (
				<EditProfile
					getStudent={getStudent}
					editProfile={editProfile}
				/>
			)}

			<PlacementDetails stuid={cookies.studentId} />
		</Box>
	);
};

export default Profile;
