import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function IncomeForm() {
    const [salaryIncome, setSalaryIncome] = useState("");
    const [incomeFromBank, setIncomeFromBank] = useState("");
    const [investments, setInvestments] = useState("");

    function handleSubmit() {
        console.log("salaryIncome:" , salaryIncome);
        console.log("incomeFromBank", incomeFromBank);
        console.log("investments", investments);
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