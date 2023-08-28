import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

export default function HRACalculatorForm() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#D2042D",
        color: "white",
      },
    },
    font: "Roboto",
  });

  const [metro, setMetro] = useState(false);
  const [basic, setBasic] = useState(0);
  const [dearness, setDearness] = useState(0);
  const [hra, setHra] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [taxableHra, setTaxableHra] = useState(0);

  const dispatch = useDispatch();

  const calcuateHRA = () => {
        let metro = 0;
        if (metro) {
            metro = (0.5 * basic);
        } else {
            metro = 0.4 * basic;
        }
        let actualRecevied = hra;
        let rent = rentPaid - (0.1 * basic);
        setTaxableHra(Math.min(metro, Math.min(rent, actualRecevied)));
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calcuateHRA();
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column" }}
        style={{ marginTop: 50 }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h5">HRACalculator</Typography>
          <Typography variant="span" style={{ marginTop: 1 }}>
            Please enter details per annual basis only
          </Typography>
          <div style={{ marginTop: 3 }}>
            <TextField
              label="Basic Salary"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              value={basic}
              onChange={(e) => setBasic(parseFloat(e.target.value) || "")}
            />
            <TextField
              label="HRA received"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end"></InputAdornment>
                ),
              }}
              value={hra}
              onChange={(e) => setHra(e.target.value || "")}
            />
            <TextField
              label="Dearness Allowance"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              value={dearness}
              onChange={(e) => setDearness(e.target.value || "")}
            />
            <TextField
              label="Rent paid for the whole year"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end"></InputAdornment>
                ),
              }}
              value={rentPaid}
              onChange={(e) => setRentPaid(e.target.value || "")}
            />
            <TextField
              label="Metro - true or false"
              id="outlined-start-adornment"
              placeholder="false"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              value={metro}
              onChange={(e) => setMetro(true)}
            />
            <h5 style={{ marginTop: 1 }}>
              Metro cities - Delhi, Mumbai, Kolkata, Chennai
            </h5>
          </div>
          <Box>
            <Button
              sx={{
                mr: 1,
                bgcolor: "#D2042D",
                color: "white",
                fontSize: "14px",
                ":hover": {
                  bgcolor: "#D2042D",
                  color: "white",
                },
                fontFamily: "Arial",
                textTransform: "none",
              }}
              onClick={handleSubmit}
            >
              Calculate HRA
            </Button>
          </Box>

          {taxableHra ? (
            <Typography sx={{ marginTop: 3 }}>
              House Rent Allowance Exempted: {taxableHra}
            </Typography>
          ) : (
            ""
          )}
        </ThemeProvider>
      </Box>
    </>
  );
}
