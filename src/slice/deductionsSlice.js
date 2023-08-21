import { getInputUtilityClass } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hra : 0,
    homeLoanSelfOccupied : 0,
    homeLoanLetOut : 0,
    educationLoan : 0,
    employeeNPS : 0,
    employerNPS : 0,
    section80C : 0,
    medicalInsurancePremium : 0,
    savingsBankInterest : 0,
    nothingApplies : 0,
}

export const counterSlice = createSlice({
    name: 'deductions',
    initialState,
    reducers: {
        update_deductions: (state = initialState, action) => {
            state.hra =  action.payload.hra,
            state.homeLoanSelfOccupied = action.payload.homeLoanSelfOccupied;
            state.homeLoanLetOut = action.payload.homeLoanLetOut;
            state.educationLoan = action.payload.educationLoan;
            state.employeeNPS = action.payload.employeeNPS;
            state.employerNPS = action.payload.employerNPS;
            state.section80C = action.payload.section80C;
            state.medicalInsurancePremium = action.payload.medicalInsurancePremium;
            state.savingsBankInterest = action.payload.savingsBankInterest;
            state.nothingApplies = action.payload.nothingApplies;
        },
       
    },
})

// Action creators are generated for each case reducer function
export const { update_deductions } = counterSlice.actions

export default counterSlice.reducer