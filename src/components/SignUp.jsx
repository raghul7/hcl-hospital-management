import {useState, useEffect} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link} from "react-router";
import Alert from '@mui/material/Alert';

export default function LoginPage() { 
const [loginData , setLoginData] = useState({});
const [userNameError, setUserNameError] = useState(false);
const [pwdError, setPwdError] = useState(false);
const [password, setPassword] = useState({
    password:"",
    confirmPassword:""
})
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoginData({
        email: data.get("email"),
        password: data.get("password"),
      })
    // checkValidation();
    console.log(loginData);
  };
  useEffect(()=>{
    checkValidation()
  },[loginData])
 
  useEffect(() =>{
    validatePassword()
  },[password])

  const checkValidation = ()=>{
    loginData.email === "" ? setUserNameError(true): setUserNameError(false);
    loginData.password === "" ? setPwdError(true): setPwdError(false)
  }

  const changePassword = (event,updateValue) =>{
    console.log(event.target.value,updateValue)
    setPassword({...password , [updateValue] : event.target.value})
  } 

 

  const validatePassword = () =>{
    if(password.confirmPassword !== password.password){
        setPwdError(true);
    }else{
        setPwdError(false);
    }
    console.log({password})
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
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            error={userNameError}
          />
        <TextField
            margin="normal"
            required
            fullWidth
            id="number"
            label="Mobile Number"
            name="number"
            autoComplete="number"
            type='number'
            error={userNameError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="email"
            autoComplete="email"
            error={userNameError}
          />
          <Alert severity="info">The given username used for login</Alert>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>{changePassword(e,'password')}}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Confirm Password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={pwdError}
            onChange={(e)=>{changePassword(e,'confirmPassword')}}
          />
          {pwdError &&
          <Alert severity="error">Confirm Password is not matched</Alert> }
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link to={{pathname:"/"}} variant="body2">
                {"Already have a account? Login in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}