import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UserContext from '../../context/UserContext';
import { getSingleStudent, updateStudentProfile } from '../../api/Api';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useCookies } from 'react-cookie';
import TextField from '@mui/material/TextField';
import './Profile.scss';
import { Button } from '@mui/material';
const EditProfile = ({ tempStudent, getStudent, setTempStudent }) => {
	console.log('tempStudent', tempStudent);
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

	const [fullname, setFullname] = useState();
	const [profileEmail, setEmail] = useState('');
	const [profilePhoneNo, setPhoneNo] = useState('');
	const [profileCourseName, setCourseName] = useState('');
	const [profilecurrentCTC, setcurrentCTC] = useState('');
	const [profileQualification, setQualification] = useState('');
	const [profileBatchName, setBatchName] = useState('');
	const [profileWorkingStatus, setWorkingStatus] = useState('');
	const [profileYearOfExp, setYearOfExp] = useState('');
	const saveProfile = (e) => {
		e.preventDefault();
		updateStudentProfile(`${getStudent._id}`, {
			fullname: fullname,
			email: profileEmail,
		});
	};
	return (
		<Box component='main' sx={{ flexGrow: 1 }}>
			<DrawerHeader />
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<Item className='profile-card'>
							<div className='profile-wrapper'>
								<div className='user-img'>
									<img src={getStudent.userImage} alt='' />
								</div>
								<div className='profile-details'>
									<h3>
										<form>
											<input
												type='text'
												value={tempStudent.fullname}
												onChange={(e) => setFullname(e.target.value)}
											/>
										</form>
									</h3>
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
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Qualification
										</TableCell>
										<TableCell align='right'>
											{getStudent.qualification}
										</TableCell>
									</TableRow>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Batch Name
										</TableCell>
										<TableCell align='right'>{getStudent.batchName}</TableCell>
									</TableRow>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Working Status
										</TableCell>
										<TableCell align='right'>
											{getStudent.workingStatus}
										</TableCell>
									</TableRow>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Total Experience
										</TableCell>
										<TableCell align='right'> {getStudent.yearOfExp}</TableCell>
									</TableRow>

									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Current CTC
										</TableCell>
										<TableCell align='right'>
											{' '}
											{getStudent.currentCTC}
										</TableCell>
									</TableRow>

									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell
											colSpan={2}
											component='th'
											scope='row'
											align='center'>
											<Button variant='outlined' onClick={saveProfile}>
												Save
											</Button>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default EditProfile;
