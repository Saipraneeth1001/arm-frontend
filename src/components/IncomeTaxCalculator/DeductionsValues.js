import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { update_deductions } from '../../slice/deductionsSlice';
import { Typography } from '@mui/material';


export default function DeductionsValuesForm() {

    let dispatch = useDispatch();

    const [hra, setHRA] = useState(0);
    const [homeLoanSelfOccupied, setHomeLoanSelfOccupied] = useState(0);
    const [homeLoanLetOut, setHomeLoanLetout] = useState(0);
    const [educationLoan, setEducationLoan] = useState(0);
    const [employeeNPS, setEmployeeNPS] = useState(0);
    const [employerNPS, setEmployerNPS] = useState(0);
    const [section80C, setSection80C] = useState(0);
    const [medicalInsurancePremium, setMedicalInsurancePremium] = useState(0);
    const [savingsBankInterest, setSavingsBankInterest] = useState(0);
    const [nothingApplies, setNothingApplies] = useState(0);

    function handleSubmit() {

        const deductions = {
            hra, homeLoanSelfOccupied, homeLoanLetOut, educationLoan, employeeNPS, employerNPS,
                section80C, medicalInsurancePremium, savingsBankInterest, nothingApplies
        }
        console.log("deductions", deductions);
        dispatch(update_deductions(deductions))
    }

    return (
        <Box sx={{ flexGrow: 1, margin: 2, padding: 5, overflow:'auto' }}>
            <Typography>After entering values, please click apply button and then press next</Typography>
            <Typography>If nothing applies for you, please click next</Typography>
            <Grid container spacing={2} sx={{marginTop: 2}}>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="HRA" variant="outlined"
                    value={hra}
                    onChange={(e) => setHRA(e.target.value)}
                     />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }}
                     id="outlined-basic" label="Deductions on 80C" variant="outlined" 
                    value={section80C}
                     onChange={(e) => setSection80C(e.target.value)}
                     />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Medical Insurance Premium" variant="outlined" 
                    value={medicalInsurancePremium}
                    onChange={(e) => setMedicalInsurancePremium(e.target.value)}
                    
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Interest on home loan - self occupied" variant="outlined" 
                    value={homeLoanSelfOccupied}
                    onChange={(e) => setHomeLoanSelfOccupied(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Interest on home loan - let out" variant="outlined" 
                    value={homeLoanLetOut}
                    onChange={(e) => setHomeLoanLetout(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Savings bank interest - 80TTA and 80TTB" variant="outlined" 
                    value={savingsBankInterest}
                    onChange={(e) => setSavingsBankInterest(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Interest on education loan" variant="outlined" 
                    value={educationLoan}
                    onChange={(e) => setEducationLoan(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Employee contribution to NPS" variant="outlined" 
                    value={employeeNPS}
                    onChange={(e) => setEmployeeNPS(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Employers contribution to NPS" variant="outlined" 
                    value={employerNPS}
                    onChange={(e) => setEmployerNPS(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
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
                    >Apply</Button>
                </Grid>
            </Grid>
        </Box>

    );
}