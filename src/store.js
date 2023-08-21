import { configureStore } from '@reduxjs/toolkit'
import deductionsReducer from './slice/deductionsSlice';

export const store = configureStore({
  reducer: {
    deductions: deductionsReducer,
  },
})