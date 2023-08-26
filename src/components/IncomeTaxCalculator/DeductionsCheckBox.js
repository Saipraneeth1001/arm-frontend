import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux'
import { update_deductions } from '../../slice/deductionsSlice';

export default function DeductionsCheckBox() {
    let dispatch = useDispatch();
    const [hra, setHRA] = useState(false);
    const [homeLoanSelfOccupied, setHomeLoanSelfOccupied] = useState(false);
    const [homeLoanLetOut, setHomeLoanLetout] = useState(false);
    const [educationLoan, setEducationLoan] = useState(false);
    const [employeeNPS, setEmployeeNPS] = useState(false);
    const [employerNPS, setEmployerNPS] = useState(false);
    const [section80C, setSection80C] = useState(false);
    const [medicalInsurancePremium, setMedicalInsurancePremium] = useState(false);
    const [savingsBankInterest, setSavingsBankInterest] = useState(false);
    const [nothingApplies, setNothingApplies] = useState(false);

    const handleSubmit = () => {
        
        dispatch(update_deductions({hra, homeLoanSelfOccupied, homeLoanLetOut, educationLoan, employeeNPS, employerNPS,
        section80C, medicalInsurancePremium, savingsBankInterest, nothingApplies}))
    }

    return (
        <Box sx={{ flexGrow: 1, margin: 2, padding: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={() => setHRA(true)} />} label="House Rent Allowance" />
                        <FormControlLabel control={<Checkbox onChange={() => setHomeLoanSelfOccupied(true)}/>} label="Interest on Home Loan - Self Occupied" />
                        <FormControlLabel control={<Checkbox onChange={() => setHomeLoanLetout(true)}/>} label="Interest on Home Loan - Let Out" />
                        
                    </FormGroup>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={() => setSection80C(true)} />} label="Deductions on 80C" />
                        <FormControlLabel control={<Checkbox onChange={() => setMedicalInsurancePremium(true)}/>} label="Medical Insurance Premium" />
                        <FormControlLabel control={<Checkbox onChange={() => setSavingsBankInterest(true)}/>} label="Savings Bank Interest - 80TTA and 80TTB" />
                        
                    </FormGroup>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={() => setEducationLoan(true)} />} label="Interest on Education Loan" />
                        <FormControlLabel control={<Checkbox onChange={() => setEmployeeNPS(true)}/>} label="Employees Contribution to NPS" />
                        <FormControlLabel control={<Checkbox onChange={() => setEmployerNPS(true)}/>} label="Employers contribution to NPS" />
                        
                    </FormGroup>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={() => setNothingApplies(true)} />} label="Nothing Applies" />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        onClick={handleSubmit}
                        variant='contained'
                        size='small'
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
                    >Apply</Button>
                </Grid>
            </Grid>
        </Box>

    );
}