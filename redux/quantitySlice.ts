import { Pizza } from '../models/pizza'
import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  cartArray: Array<{ id: Pizza['_id']; quantity: number }>
  totalCartQuantity: 0
  totalCartPrice: 0
}

const initialState: InitialState = {
  cartArray: [],
  totalCartQuantity: 0,
  totalCartPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCar(state, action) {
      const payload: Pizza['_id'] = action.payload
      const isProductExist = state.cartArray.find(
        (pizza) => pizza.id === payload
      )
      if (!isProductExist) {
        state.cartArray.push({ id: payload, quantity: 1 })
        state.totalCartQuantity += 1
      }
      if (isProductExist) {
        let quantity: number
        let newQuantity: number
        state.cartArray.find((pizza) => {
          {
            quantity = pizza.quantity
            newQuantity = quantity += 1
            const index = state.cartArray.indexOf(pizza)
            state.cartArray.splice(index, 1, {
              id: payload,
              quantity: newQuantity,
            })
          }
        })
        state.totalCartQuantity += 1
      }
    },
  },
})
export const { addToCar } = cartSlice.actions
export default cartSlice.reducer
