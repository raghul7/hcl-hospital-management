import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Container,Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router';
// import AdbIcon from '@mui/icons-material/Adb';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            
            <Link style={{ textDecoration: 'none' }} to="/"><Button sx={{ my: 2, color: 'white', display: 'block' }}>Dashboard</Button></Link>
            <Link style={{ textDecoration: 'none' }} to="/patient-admission"><Button sx={{ my: 2, color: 'white', display: 'block' }}>Add Patient</Button></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
