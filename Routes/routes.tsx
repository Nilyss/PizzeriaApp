import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// view
import { Home } from '../views/home'
import { PizzaDetails } from '../views/pizzaDetails'
import { Cart } from '../views/cart'

const Stack = createNativeStackNavigator()

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pizza" component={PizzaDetails} />
        <Stack.Screen name="Panier" component={Cart} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
