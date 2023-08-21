import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'


export default function DeductionsValuesForm() {


    

    function handleSubmit() {
        
    }

    return (
        <Box sx={{ flexGrow: 1, margin: 2, padding: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="HRA" variant="outlined"
                    
                     />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }}
                     id="outlined-basic" label="Deductions on 80C" variant="outlined" 
                     />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Medical Insurance Premium" variant="outlined" 
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Interest on home loan - self occupied" variant="outlined" 
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Interest on home loan - let out" variant="outlined" 
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Savings bank interest - 80TTA and 80TTB" variant="outlined" 
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Interest on education loan" variant="outlined" 
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Employee contribution to NPS" variant="outlined" 
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Employers contribution to NPS" variant="outlined" 
                    />
                </Grid>
                {/* <Grid item xs={12} md={8}>
                    <Button
                    onClick={handleSubmit} 
                    variant='contained'
                    size='large'
                        sx={{
                            color: 'white',
                            font: 'bold',
                            backgroundColor: '#D2042D',
                            ":hover": {
                                bgcolor: '#D2042D',
                                color: "white"
                            },
                            textTransform: 'none',
                            fontFamily: 'arial'
                        }}
                    >Submit</Button>
                </Grid> */}
            </Grid>
        </Box>

    );
}