import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import axios from 'axios';
import Progress from './Progress';

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

    const salaryIncome = useSelector(state => state.income.salaryIncome);
    const investments = useSelector(state => state.income.investments);
    const incomeFromBank = useSelector(state => state.income.incomeFromBank);

    const [showLoader, setShowLoader] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [showAnalysis, setShowAnalysis] = useState(false);


    const handleSubmit = () => {

       setShowLoader(true);
       setShowButton(false);


        const income = {
            salaryIncome,
            investments,
            incomeFromBank
        }

        const deductions = {
            hra, homeLoanSelfOccupied, homeLoanLetOut, educationLoan, employeeNPS, employerNPS,
                section80C, medicalInsurancePremium, savingsBankInterest, nothingApplies
        }

        // axios.post(``,{
        //     headers: {
        //         'Content-Type':'applicaton/json'
        //     },
        //     data: {
        //         income: income,
        //         deductions: deductions
        //     }
        // })
        // .then((res) => {
        //     console.log(res);
        //     setTimeout(() => {
        //         setShowLoader(false);
        //         setShowAnalysis(true);
        //     }, 5000)
        // })
    }

    return (
        <Box sx={{ flexGrow: 1, margin: 2, padding: 5 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                {showLoader ? <Progress /> :"" } 
                {showButton?<Button
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
                    >Generate the strategy</Button>:""}
                {showAnalysis ? "" : ""}
            </Grid>
        </Grid>
    </Box>
    );
}

export default Analysis;