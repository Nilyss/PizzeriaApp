import React from 'react'
import { useContext } from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

// models
import { Pizza } from '../models/pizza'

// context
import { PizzaContext } from '../context'

// init component
interface CardsProps {}

export const Cards: React.FunctionComponent<CardsProps> = ({}) => {
  const pizzas = useContext(PizzaContext)

  // component styles
  const styles = StyleSheet.create({
    // ********** Wrapper **********
    menuWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardWrapper: {
      display: 'flex',
      flexDirection: 'row',
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
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    // ********** Elements **********

    pizzaPicture: {
      width: 150,
      height: 250,
      borderRadius: 8,
    },
    pizzaName: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    pizzaIngredients: {
      width: 140,
      fontSize: 16,
    },
    pizzaPrice: {
      fontSize: 20,
      marginRight: 20,
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

  // render

  return (
    <View>
      {pizzas &&
        pizzas.map((pizza: Pizza, index: number) => {
          return (
            <View key={index} style={styles.menuWrapper}>
              <View style={styles.cardWrapper}>
                <Image
                  source={{ uri: pizza.picture }}
                  style={styles.pizzaPicture}
                />
                <View style={styles.cardWrapper__text}>
                  <Text style={styles.pizzaName}>{pizza.name}</Text>
                  <Text style={styles.pizzaIngredients}>
                    {pizza.ingredients}
                  </Text>
                  <View style={styles.cardWrapper__text__priceAndButton}>
                    <Text style={styles.pizzaPrice}>{pizza.price} €</Text>
                    <Pressable style={styles.buttonStyle}>
                      <Text style={styles.buttonText}>+ Ajouter</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          )
        })}
    </View>
  )
}
