import React, { useState, useContext, useEffect, useRef } from 'react';
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
const EditProfile = ({ getStudent , editProfile }) => {
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

	const [formData, setFormData] = useState({
		fname: getStudent.fullname,
		username: getStudent.username,
		email: getStudent.email,
		phoneNo: getStudent.phoneNo,
		courseName: getStudent.courseName,
		qualification: getStudent.qualification,
		batchName: getStudent.batchName,
		workingStatus: getStudent.workingStatus,
		yearOfExp: getStudent.yearOfExp,
		currentCTC: getStudent.currentCTC,
	});
	const saveProfile = (e) => {
		e.preventDefault();
		updateStudentProfile(`${getStudent._id}`, {
			fullname: formData.fname,
			username: formData.username,
			email: formData.email,
			phoneNo: formData.phoneNo,
			courseName: formData.courseName,
			qualification: formData.qualification,
			batchName: formData.batchName,
			workingStatus: formData.workingStatus,
			yearOfExp: formData.yearOfExp,
			currentCTC: formData.currentCTC,
		});
		editProfile(false)
	};
	const handleInput = (e) => {
		setFormData((prev) => {
			let helper = { ...prev };
			helper[`${e.target.id}`] = e.target.value;
			return helper;
		});
	};
	return (
		<Box component='main' sx={{ flexGrow: 1 }}>
			<DrawerHeader />
			{/* <Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
					<Item className='profile-card'>
						<TextField
							label="Fullname"
							type='text'
							id='fname'
							value={formData.fname}
							onChange={handleInput}
							className="mb-2"
						/>
						<TextField
							type='text'
							id='email'
							value={formData.email}
							onChange={handleInput}
						/>
						<TextField
							type='text'
							id='phoneNo'
							value={formData.phoneNo}
							onChange={handleInput}
						/>
						<TextField
							type='text'
							id='courseName'
							value={formData.courseName}
							onChange={handleInput}
						/>
						</Item>
					</Grid>
					<Grid item xs={6}>
					<TextField
							type='text'
							id='qualification'
							value={formData.qualification}
							onChange={handleInput}
						/>
						<TextField
							type='text'
							id='batchName'
							value={formData.batchName}
							onChange={handleInput}
						/>
						<TextField
							type='text'
							id='workingStatus'
							value={formData.workingStatus}
							onChange={handleInput}
						/>
						<TextField
							type='text'
							id='yearOfExp'
							value={formData.yearOfExp}
							onChange={handleInput}
						/>
						<TextField
							type='text'
							id='currentCTC'
							value={formData.currentCTC}
							onChange={handleInput}
						/>
					</Grid>
				</Grid>
			</Box> */}
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<div className='profile-card'>
							<div className='profile-wrapper'>
								<div className='user-img'>
									<img src={getStudent.userImage} alt='' />
								</div>
								<div className='profile-details'>
									<TableContainer component={Paper}>
										<Table aria-label='simple table'>
											<TableBody>
												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Full Name
													</TableCell>
													<TableCell align='right'>
														<TextField
															label='Full Name'
															type='text'
															id='fname'
															value={formData.fname}
															onChange={handleInput}
														/>
													</TableCell>
												</TableRow>

												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Username
													</TableCell>
													<TableCell align='right'>
														<TextField
															label='Username'
															type='text'
															id='username'
															value={formData.username}
															onChange={handleInput}
														/>
													</TableCell>
												</TableRow>

												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Email
													</TableCell>
													<TableCell align='right'>
														<TextField
															label='Email'
															type='text'
															id='email'
															value={formData.email}
															onChange={handleInput}
														/>
													</TableCell>
												</TableRow>

												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Mobile No.
													</TableCell>
													<TableCell align='right'>
														<TextField
															label='Mobile no.'
															type='text'
															id='phoneNo'
															value={formData.phoneNo}
															onChange={handleInput}
														/>
													</TableCell>
												</TableRow>

												<TableRow
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component='th' scope='row'>
														Course Name
													</TableCell>
													<TableCell align='right'>
														<TextField
															label='Course Name'
															type='text'
															id='courseName'
															value={formData.courseName}
															onChange={handleInput}
														/>
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item xs={6}>
						<TableContainer component={Paper}>
							<Table aria-label='simple table'>
								<TableBody>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Qualification
										</TableCell>
										<TableCell align='right'>
											<TextField
												type='text'
												id='qualification'
												value={formData.qualification}
												onChange={handleInput}
											/>
										</TableCell>
									</TableRow>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Batch Name
										</TableCell>
										<TableCell align='right'>
											<TextField
												type='text'
												id='batchName'
												value={formData.batchName}
												onChange={handleInput}
											/>
										</TableCell>
									</TableRow>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Working Status
										</TableCell>
										<TableCell align='right'>
											<TextField
												type='text'
												id='workingStatus'
												value={formData.workingStatus}
												onChange={handleInput}
											/>
										</TableCell>
									</TableRow>
									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Total Experience
										</TableCell>
										<TableCell align='right'>
											{' '}
											<TextField
												type='text'
												id='yearOfExp'
												value={formData.yearOfExp}
												onChange={handleInput}
											/>
										</TableCell>
									</TableRow>

									<TableRow
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component='th' scope='row'>
											Current CTC
										</TableCell>
										<TableCell align='right'>
											<TextField
												type='text'
												id='currentCTC'
												value={formData.currentCTC}
												onChange={handleInput}
											/>
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
