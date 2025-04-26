import React, { useState,useEffect } from 'react';
import NavBar from './NavBar';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Card from '@mui/material/Card';
import axois from 'axios';
import config from '../config';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Dashboard() {

  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    setPatientList(rows)
    axois.get(config.API_URL).then((res) => {

    }).catch((err) => {
  
    });
  },[])

  const style = {
    py: 0,
    width: '100%',
    maxWidth: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Patient First name', width: 140 },
    { field: 'lastName', headerName: 'Patient Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Patient name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    { field: 'complaint', headerName: 'Complaint', width: 180 },
  ];  
  
  const paginationModel = { page: 0, pageSize: 5 };

  return <>
    <NavBar />
    <Paper sx={{ height: 400, width: '100%' }}>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          color: 'text.secondary',
          '& svg': {
            m: 1,
          },
          [`& .${dividerClasses.root}`]: {
            mx: 0.5,
          },
        }}
      >
        <List sx={style} aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="ICU" />
            <Divider orientation="vertical" variant="middle" flexItem />
            <ListItemText className='available' primary="11A AVAILABLE" />
            <ListItemText className='occupied' primary="11B OCCUPIED" />
            <ListItemText className='occupied' primary="11B OCCUPIED" />
          </ListItem>

          <Divider component="li" />
          <ListItem>
            <ListItemText style={{ width: '22px' }} primary="GENERAL WARD" />
            <Divider orientation="vertical" variant="middle" flexItem />
            <ListItemText className='reserved' primary="41B RESERVED" />
            <ListItemText className='reserved' primary="52A RESERVED" />
            <ListItemText className='occupied' primary="42A OCCUPIED" />
          </ListItem>
        </List>
      </Card>
      
      <DataGrid
        rows={patientList}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  </>;
}

export default Dashboard;
