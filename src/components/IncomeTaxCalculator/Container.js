import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MaterialNavbar from './MaterialNavbar';
import StepperContainer from './StepperContainer';
import { Routes, Route } from "react-router-dom"
import HRACalculatorForm from './Hra';
import IncomeStrategy from '../StrategyComponent/IncomeStrategy';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<>
          <Container maxWidth="lg" sx={{ padding: 2 }} >
            <MaterialNavbar />
            <StepperContainer />
          </Container>
        </>} />

        <Route path='/hra' element={<>
          <Container maxWidth="lg" sx={{ padding: 2 }} >
            <MaterialNavbar />
           <HRACalculatorForm />
          </Container>
        </>} />

        <Route path='/strategize' element={<>
          <Container maxWidth="lg" sx={{ padding: 2 }} >
            <MaterialNavbar />
            <IncomeStrategy />
          </Container>
        </>} />

      </Routes>
    </React.Fragment>
  );
}