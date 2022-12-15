import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// view
import { Home } from '../views/home'
import { PizzaDetails } from '../views/pizzaDetails'
import { Basket } from '../views/basket'

const Stack = createNativeStackNavigator()

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="pizza" component={PizzaDetails} />
        <Stack.Screen name="basket" component={Basket} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
