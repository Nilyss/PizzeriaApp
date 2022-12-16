import { Pizza } from '../models/pizza'
import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  cartArray: Array<{ id: Pizza['_id']; quantity: number }>
  totalCartQuantity: 0
}

const initialState: InitialState = {
  cartArray: [],
  totalCartQuantity: 0,
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
    removeFromCart(state, action) {
      const payload: Pizza['_id'] = action.payload
      const index = state.cartArray.findIndex((pizza) => pizza.id === payload)
      if (index !== -1) {
        const removedPizza = state.cartArray[index]
        const newState = Object.assign({}, state, {
          cartArray: [
            ...state.cartArray.slice(0, index),
            ...state.cartArray.slice(index + 1),
          ],
          totalCartQuantity: state.totalCartQuantity - removedPizza.quantity,
        })
        return newState
      }
      return state
    },
    subtractFromCart(state, action) {
      const payload: Pizza['_id'] = action.payload
      const index = state.cartArray.findIndex((pizza) => pizza.id === payload)
      if (index !== -1) {
        const updatedPizza = state.cartArray[index]
        // if pizza quantity > 1, remove one pizza
        if (updatedPizza.quantity > 1) {
          updatedPizza.quantity -= 1
          state.totalCartQuantity -= 1
        }
        // if pizza quantity = 1, delete pizza from state
        else {
          state.cartArray = [
            ...state.cartArray.slice(0, index),
            ...state.cartArray.slice(index + 1),
          ]
          state.totalCartQuantity -= 1
        }
      }
    },
  },
})
export const { addToCar, removeFromCart, subtractFromCart } = cartSlice.actions
export default cartSlice.reducer
