import { configureStore } from '@reduxjs/toolkit'
import deductionsReducer from './slice/deductionsSlice';
import incomeReducer from './slice/incomeSlice';

export const store = configureStore({
  reducer: {
    deductions: deductionsReducer,
    income: incomeReducer,
  },
})