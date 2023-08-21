import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MaterialNavbar from '../components/MaterialNavbar';
import IncomeForm from './IncomeForm';
import Stepper from './Stepper';
import Form from './Form';
import StepperContainer from './StepperContainer';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{padding: 2}} >
        <MaterialNavbar />
        {/* <Stepper /> */}
        <StepperContainer />
      </Container>
    </React.Fragment>
  );
}