import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    salaryIncome: 0,
    investments: 0,
    incomeFromBank: 0,
    basicSalary: 0,

}

export const counterSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {
        update_income: (state, action) => {
            return {
                ...state,
                salaryIncome: action.payload.salaryIncome,
                investments: action.payload.investments,
                incomeFromBank: action.payload.incomeFromBank,
                basicSalary: action.payload.basicSalary
            }
        }

    },
})

// Action creators are generated for each case reducer function
export const { update_income } = counterSlice.actions

export default counterSlice.reducer