import {useState, useEffect} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router";
import axios from 'axios'

export default function LoginPage() { 
const [loginData , setLoginData] = useState({});
const [userNameError, setUserNameError] = useState(false);
const [pwdError, setPwdError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoginData({
        email: data.get("email"),
        password: data.get("password"),
      })
    console.log(loginData);
  }

  const loginUser = () =>{
    if(!userNameError && !pwdError){
        return axios.post('user_base_url' + '/login', loginData)
         .then((res)=>{
           if(res.data === 'SUCCESS') {
             localStorage.setItem('jwtToken',res.data.token)
           } else if(res.data === 'FAILURE') {
             //login failed
           }}).catch(error=>{
            console.log(error)
           })
   
    }
}

  useEffect(()=>{
    checkValidation()
  },[loginData]);

 const checkValidation = ()=>{
    loginData.email === "" ? setUserNameError(true): setUserNameError(false);
    loginData.password === "" ? setPwdError(true): setPwdError(false)
    loginUser();
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="email"
            autoComplete="email"
            autoFocus
            error={userNameError}
            onChange={()=>{setUserNameError(false)}}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={pwdError}
            onChange={()=>{setPwdError(false)}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to={{pathname:"/signup"}} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
