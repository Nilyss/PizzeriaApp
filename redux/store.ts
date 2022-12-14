import { configureStore } from '@reduxjs/toolkit'
import { QuantitySlice } from './quantitySlice'

export const store = configureStore({
  reducer: {
    quantity: QuantitySlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
