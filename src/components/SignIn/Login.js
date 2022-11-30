import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Typography,
} from "@mui/material";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    user: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (inputs.user === "admin") {
      axios.post("http://localhost:5050/admin", {
        password: inputs.password,
        email: inputs.email,
      });
    }
    if (inputs.user === "career-team") {
      axios.post("http://localhost:5050/career-team", {
        password: inputs.password,
        email: inputs.email,
      });
    }
    if (inputs.user === "faculty") {
      axios.post("http://localhost:5050/faculty", {
        password: inputs.password,
        email: inputs.email,
      });
    }
    if (inputs.user === "learners") {
      axios.post("http://localhost:5050/learners", {
        password: inputs.password,
        email: inputs.email,
      });
    }
    /*     axios.post("http://localhost:5050/data",{
                    user: inputs.user,
                    password: inputs.password,
                    email: inputs.email

                    })
                  .then(function (response) {
                    console.log(response);
                    })
                  .catch(function (error) {
                    console.log(error);
                    }); */
  };
  return (
    <>
      <Box>
        <Typography variant="h3" sx={{ margin: "10px", fontWeight: "bold" }}>
          Sign In
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        {/* <FormControl sx={{ margin: "10px", width: "350px" }}>
          <InputLabel id='demo-simple-select-label'>
            Select your login type
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={inputs.user}
            label='User Types'
            onChange={handleChange}
            name='user'
          >
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"career-team"}>Career Service Team</MenuItem>
            <MenuItem value={"faculty"}>Faculty</MenuItem>
            <MenuItem value={"learners"}>Learners</MenuItem>
          </Select>
        </FormControl> */}
        <br />
        <TextField
          required
          name='email'
          value={inputs.email}
          onChange={handleChange}
          label='Email'
          placeholder='example@domain.com'
          type='text'
          variant='outlined'
          sx={{ margin: "10px", width: "350px" }}
        />
        <br />
        <TextField
          required
          name='password'
          value={inputs.password}
          onChange={handleChange}
          label='Password'
          placeholder='Enter password'
          type='password'
          variant='outlined'
          sx={{ margin: "10px", width: "350px" }}
        />
        <br />
        <Button variant='contained' type='submit' color='error' style={{width:"150px",padding:"5px",margin:"10px"}}>
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
