import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Progress() {
  return (
    <Box sx={{ display: 'flex', color:'#D2042D' }}>
      <CircularProgress /> 
      <Typography style={{color:'black', padding: 2, marginLeft: 20}}>Please wait while TOS generates the best saving strategy for you..</Typography>
    </Box>
  );
}
