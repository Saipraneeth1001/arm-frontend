import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Analysis = () => {

    const hra = useSelector(state => state.deductions.hra);
    const homeLoanSelfOccupied = useSelector(state => state.deductions.homeLoanSelfOccupied);
    const homeLoanLetOut = useSelector(state => state.homeLoanLetOut);
    const educationLoan = useSelector(state => state.deductions.educationLoan);
    const employeeNPS = useSelector(state => state.deductions.employeeNPS);
    const employerNPS = useSelector(state => state.deductions.employerNPS);
    const section80C = useSelector(state => state.deductions.section80C);
    const medicalInsurancePremium = useSelector(state => state.deductions.medicalInsurancePremium);
    const savingsBankInterest = useSelector(state => state.deductions.savingsBankInterest);
    const nothingApplies = useSelector(state => state.deductions.nothingApplies);

    return (
        <Box sx={{ flexGrow: 1, margin: 2, padding: 5 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography>Hello Sai, Welcome</Typography>
            </Grid>
        </Grid>
    </Box>
    );
}

export default Analysis;