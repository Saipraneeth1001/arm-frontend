import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

export default function ButtonAppBar() {

  let navigate = useNavigate();

  function handleClick() {
    navigate('/hra');
  }

  return (
    <Box sx={{ flexGrow: 1, height: 30 }}>
      <AppBar position="static" sx={{ borderRadius: '30px', background: '#D2042D', color: 'white'}}>
        <Toolbar>
          <Button
            onClick={() => navigate('/')}
            sx={{
              color: 'white',
              font: 'bold',
              fontSize: '16px',
              textTransform: 'none',
              ":hover": {
                bgcolor: '#D2042D',
                color: "white"
              }
            }}
          >Arm</Button>
          <Button
            onClick={handleClick}
            sx={{
              color: 'white',
              font: 'bold',
              fontSize: '16px',
              textTransform: 'none',
              ":hover": {
                bgcolor: '#D2042D',
                color: "white"
              }
            }}
          >Hra</Button>
          <Button
            onClick={() => {navigate('/strategize')}}
            sx={{
              color: 'white',
              font: 'bold',
              fontSize: '16px',
              textTransform: 'none',
              ":hover": {
                bgcolor: '#D2042D',
                color: "white"
              }
            }}
          >Strategize</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}