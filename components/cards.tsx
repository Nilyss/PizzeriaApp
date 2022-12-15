import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Pizza } from '../models/pizza'
import { PizzaContext } from '../context'

// Typing for useRoute() https://stackoverflow.com/a/65615746/18481665
export type RootStackParamList = {
  params: { id: string }
}
export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>

interface CardsProps {}

export const Cards: React.FunctionComponent<CardsProps> = ({}) => {
  const [pizza, setPizza] = useState<Pizza>()
  const pizzas = useContext(PizzaContext)

  // find selected pizza
  const route = useRoute<RootRouteProps<'params'>>()
  const id = route.params.id
  useEffect(() => {
    const getRequestedPizza = async () => {
      if (pizzas) {
        await pizzas.find((pizza: Pizza) => {
          if (pizza._id === id) return setPizza(pizza)
        })
      }
    }
    getRequestedPizza()
  }, [])

  return (
    <View>
      {pizza && (
        <View style={styles.menuWrapper}>
          <View style={styles.cardWrapper}>
            <Image
              source={{ uri: pizza.picture }}
              style={styles.pizzaPicture}
            />
            <View style={styles.cardWrapper__text}>
              <Text style={styles.pizzaName}>{pizza.name}</Text>
              <Text style={styles.pizzaIngredients}>{pizza.ingredients}</Text>
              <View style={styles.cardWrapper__text__priceAndButton}>
                <Text style={styles.pizzaPrice}>{pizza.price} €</Text>
                <Pressable style={styles.buttonStyle}>
                  <Text style={styles.buttonText}>+ Ajouter</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

// component styles
const styles = StyleSheet.create({
  // ********** Wrapper **********
  menuWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cardWrapper: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  cardWrapper__text: {
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardWrapper__text__priceAndButton: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // ********** Elements **********

  pizzaPicture: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  pizzaName: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  pizzaIngredients: {
    width: '100%',
    fontSize: 16,
  },
  pizzaPrice: {
    fontSize: 20,
  },
  buttonStyle: {
    padding: 10,
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: '#FF7F50',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
})
