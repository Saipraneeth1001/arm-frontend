// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import { Typography } from '@mui/material';
// import axios from 'axios';
// import Progress from '../IncomeTaxCalculator/Progress';

// const Strategy = () => {

//     const salaryIncome = useSelector(state => state.income.salaryIncome);
//     const investments = useSelector(state => state.income.investments);
//     const incomeFromBank = useSelector(state => state.income.incomeFromBank);

//     const [showLoader, setShowLoader] = useState(false);
//     const [showButton, setShowButton] = useState(true);
//     const [showAnalysis, setShowAnalysis] = useState(false);
//     const [data, setData] = useState("");


//     const handleSubmit = () => {

//         setShowLoader(true);
//         setShowButton(false);

//         const income = {
//             salaryIncome,
//             investments,
//             incomeFromBank
//         }

//         const deductions = {
//             hra, homeLoanSelfOccupied, homeLoanLetOut, educationLoan, employeeNPS, employerNPS,
//             section80C, medicalInsurancePremium, savingsBankInterest
//         }

//         console.log("home loan let out", deductions);

//         axios.post(`http://localhost:8080/v1/income/tax`,{
//             headers: {
//                 'Content-Type':'applicaton/json'
//             },
//             data: {
//                 salaryComponent: income,
//                 deductionsComponent: deductions
//             }
//         })
//         .then((res) => {
//             console.log(res);
//             setTimeout(() => {
//                 setShowLoader(false);
//                 setShowAnalysis(true);
//                 setData(res.data);
//             }, 5000)
//         })
//     }

//     return (
//         <Box sx={{ flexGrow: 1, margin: 2, padding: 5 }}>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={6}>
//                     {showLoader ? <Progress /> : ""}
//                     {showButton ? <Button
//                         onClick={handleSubmit}
//                         variant='contained'
//                         size='large'
//                         sx={{
//                             color: 'white',
//                             font: 'bold',
//                             backgroundColor: '#D2042D',
//                             ":hover": {
//                                 bgcolor: '#D2042D',
//                                 color: "white"
//                             },
//                             textTransform: 'none',
//                             fontFamily: 'arial'
//                         }}
//                     >Generate strategy</Button> : ""}
//                     {showAnalysis ? <Strategy data={data} /> : ""}
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }

// export default Analysis;