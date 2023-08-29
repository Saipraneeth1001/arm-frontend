import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IncomeForm from './IncomeForm';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import DeductionsValuesForm from './DeductionsValues';
import Analysis from './Analysis';

const steps = ['IncomeDetails', 'Deductions', 'Strategize'];

export default function IncomeStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const RenderComponent = () => {
    if (activeStep === 0)
      return <IncomeForm />;
    if (activeStep === 1) {
      console.log("two");
      return <DeductionsValuesForm />
      
    }
    if (activeStep === 2) {
      console.log("three");
      return <Analysis />
    }
    
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#D2042D',
        color: 'white',
      },
    },
    font: 'Roboto'
  });

  return (
    <Box sx={{ width: '100%', marginTop: 1 }}>
      <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step  key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          {RenderComponent()}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                mr: 1,
                bgcolor: '#D2042D',
                color: 'white',
                fontSize: '14px',
                ":hover": {
                  bgcolor: '#D2042D',
                  color: "white"
                },
                fontFamily: 'Arial',
                textTransform:'none'
              }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} 
            sx={{
                bgcolor: '#D2042D',
                color: 'white',
                fontSize: '14px',
                ":hover": {
                  bgcolor: '#D2042D',
                  color: "white"
                },
                fontFamily: 'Arial',
                textTransform: 'none'
              }}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
      </ThemeProvider>
    </Box>
  );
}
