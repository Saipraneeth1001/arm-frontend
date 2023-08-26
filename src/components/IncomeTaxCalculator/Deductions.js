import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function DeductionsForm() {
    return (
        <Box sx={{ flexGrow: 1, margin: 2, padding: 5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField sx={{width: '100%'}} id="outlined-basic" label="80C" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="80D" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="80TTA" variant="outlined" />
                </Grid>
            </Grid>
        </Box>

    );
}