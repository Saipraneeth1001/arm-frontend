import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { update_income } from '../../slice/incomeSlice';


export default function IncomeForm() {
    const [salaryIncome, setSalaryIncome] = useState(0);
    const [incomeFromBank, setIncomeFromBank] = useState(0);
    const [investments, setInvestments] = useState(0);

    let dispatch = useDispatch();

    function handleSubmit() {
        dispatch(update_income({
            salaryIncome,
            investments,
            incomeFromBank,
        }));
        setSalaryIncome(0);
        setIncomeFromBank(0);
        setInvestments(0);
    }

    return (
        <Box sx={{ flexGrow: 1, margin: 2, padding: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Salary Income" variant="outlined"
                    value={salaryIncome}
                    onChange={(e) => setSalaryIncome(e.target.value)}
                     />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }}
                     id="outlined-basic" label="Interest from Bank" variant="outlined" 
                     value={incomeFromBank}
                     onChange={(e) => setIncomeFromBank(e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField sx={{ width: '100%' }} 
                    id="outlined-basic" label="Investments" variant="outlined" 
                    value={investments}
                    onChange={(e) => setInvestments(e.target.value)}
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
                    >Submit</Button>
                </Grid>
            </Grid>
        </Box>

    );
}