import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, height: 30 }}>
      <AppBar position="static" sx={{ borderRadius: '30px', background: '#D2042D', color: 'white'}}>
        <Toolbar>
          <Button
            sx={{
              color: 'white',
              font: 'bold',
              fontSize: '20px',
              ":hover": {
                bgcolor: '#D2042D',
                color: "white"
              }
            }}
          >ARM</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}