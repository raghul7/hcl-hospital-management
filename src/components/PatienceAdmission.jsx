import React, { useState } from 'react'
// import TextField from '@mui/material/TextField';
import { FormControl, FormGroup, FormLabel, TextareaAutosize, TextField, Checkbox, FormControlLabel, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router';
import NavBar from './NavBar';

export default function PatienceAdmission() {
    const [patientData, setPatientData] = useState({
        patient_name:'',
        attender_name:'',
        phone:'',
        complaint:'',
        how_long:'',
        address:'',
        is_medication:false,
        isSubmitted:false
    });

    const formHandler = () => {
        setPatientData((prevState) => ({
            ...prevState, isSubmitted:true
        }))
        
        console.log(patientData);
    };

    const changeHandler = (e,type) => {
        const newValue = e.target.value;
        console.log('jhj',/^\d*$/.test(newValue))
        setPatientData((prevState) => ({
            ...prevState, [type]:e.target.value
        }));
        // if (/^\d*$/.test(newValue) && type === 'phone') {
        //     //setValue(newValue);
        //     setPatientData((prevState) => ({
        //         ...prevState, [type]:e.target.value
        //     }));return;
        // } else {
        //     setPatientData((prevState) => ({
        //         ...prevState, [type]:e.target.value
        //     }))
        // }    
    };
    
    return <>
        <NavBar />
        <Container component="main" maxWidth="xs">
          <Box>
            <FormGroup>
                <FormControl>
                    <FormLabel>Patient Name</FormLabel>
                    <TextField label="Patient name" name="patient_name" variant="outlined" value={patientData.patient_name} onChange={(e) => changeHandler(e,'patient_name')} />
                    {(patientData.isSubmitted && patientData.patient_name === '') && <span className='error'>Enter patient name</span>}
                </FormControl>
                <FormControl>
                    <FormLabel>Attender name</FormLabel>
                    <TextField label="Attender name" variant="outlined" name="attender_name" value={patientData.attender_name} onChange={(e) => changeHandler(e,'attender_name')} />
                    {(patientData.isSubmitted && patientData.attender_name === '') && <span className='error'>Enter attender name</span>}
                </FormControl>
                <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <TextField label="Phone" variant="outlined" name="phone" onChange={(e) => changeHandler(e,'phone')} value={patientData.phone} />
                    {(patientData.isSubmitted && patientData.phone === '') && <span className='error'>Enter phone numer</span>}
                </FormControl>
                <FormControl>
                    <FormLabel>Enter Complaint</FormLabel>
                    <TextareaAutosize aria-label="minimum height" minRows={3} name="complaint" onChange={(e) => changeHandler(e,'complaint')} value={patientData.complaint} />
                </FormControl>
                <FormControl>
                    <FormLabel>How long has been going on?</FormLabel>
                    <TextField variant="outlined" name="how_long" value={patientData.how_long} onChange={(e) => changeHandler(e,'how_long')} />
                </FormControl>
                <FormControl>
                    <FormLabel>Address</FormLabel>
                    <TextField variant="outlined" name="address" value={patientData.address} onChange={(e) => changeHandler(e,'address')} />
                </FormControl>
                <FormControl>
                    <FormControlLabel control={<Checkbox onClick={() => setPatientData((prevState) => ({
                ...prevState, is_medication:!prevState.is_medication
            }))} checked={patientData.is_medication} name="is_medication" />} label="Is your taking any medication" />
                </FormControl>
            </FormGroup>
            <Button disabled={patientData.isSubmitted} onClick={formHandler} variant="contained">Submit</Button>
            <Link style={{ textDecoration: 'none' }} to="/dashboard"><Button variant="outlined">Cancel</Button></Link>
            </Box>   
        </Container>
    </>;
}
