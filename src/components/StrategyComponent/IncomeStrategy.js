import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import Progress from "../IncomeTaxCalculator/Progress";
import Strategy from "../IncomeTaxCalculator/Strategy";


const IncomeStrategy = () => {
  const [salaryIncome, setSalaryIncome] = useState(0);
  const [basicSalary, setBasicSalary] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [data, setData] = useState("");
  const [showComponent, setShowComponent] = useState(true);
  const [hra, setHRA] = useState(0);


  const handleSubmit = () => {
    setShowLoader(true);
    setShowButton(false);
    setShowComponent(false);

    const income = {
      salaryIncome,
      basicSalary,
    };

    const deductions = {
      hra,
      // homeLoanSelfOccupied,
      // homeLoanLetOut,
      // educationLoan,
      // employeeNPS,
      // employerNPS,
      // section80C,
      // medicalInsurancePremium,
      // savingsBankInterest,
    };

    axios
      .post(`http://localhost:8080/v1/strategize/createStrategy`, {
        headers: {
          "Content-Type": "applicaton/json",
        },
        data: {
          salaryComponent: income,
          deductionsComponent: deductions,
        },
      })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setShowLoader(false);
          setShowAnalysis(true);
          setData(res.data);
        }, 5000);
      });
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 2, padding: 5 }}>
      <Typography style={{ margin: 3}}>
        Please use our HRA calculator and find the HRA exemption and enter the value below as this acts as very big tax saver.
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 2}}>
        {showComponent ? 
        <><Grid item xs={12} md={6}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Salary Income"
            variant="outlined"
            value={salaryIncome}
            onChange={(e) => setSalaryIncome(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Basic Salary"
            variant="outlined"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="HRA"
            variant="outlined"
            value={hra}
            onChange={(e) => setHRA(e.target.value)}
          />
        </Grid>
        </> : ""}
        <Grid item xs={12} md={6}>
          {showLoader ? <Progress /> : ""}
          {showButton ? (
            <Button
              onClick={handleSubmit}
              variant="contained"
              size="large"
              sx={{
                color: "white",
                font: "bold",
                backgroundColor: "#D2042D",
                ":hover": {
                  bgcolor: "#D2042D",
                  color: "white",
                },
                textTransform: "none",
                fontFamily: "arial",
              }}
            >
              Generate strategy
            </Button>
          ) : (
            ""
          )}
          {showAnalysis ? <Strategy data={data} /> : ""}
        </Grid>
      </Grid>
    </Box>
  );
};

export default IncomeStrategy;
