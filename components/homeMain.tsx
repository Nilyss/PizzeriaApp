import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PizzaContext } from '../context'
import { Pizza } from '../models/pizza'

export interface HomeMainProps {}
export const HomeMain: React.FunctionComponent<HomeMainProps> = (
  navigation: any
) => {
  const pizzas = useContext(PizzaContext)

  function goToTargetPizza(id: string) {
    navigation.navigate('Pizza', { id })
  }

  return (
    <View>
      {pizzas &&
        pizzas.map((pizza: Pizza, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => goToTargetPizza(pizza._id)}
            >
              <View style={styles.menuWrapper}>
                <View style={styles.cardWrapper}>
                  <Image
                    source={{ uri: pizza.picture }}
                    style={styles.pizzaPicture}
                  />
                  <View style={styles.cardWrapper__text}>
                    <Text style={styles.pizzaName}>{pizza.name}</Text>
                    <Text style={styles.pizzaPrice}>{pizza.price} €</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
    </View>
  )
}

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
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    alignItems: 'center',
  },
  cardWrapper__text: {
    marginLeft: 20,
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  },

  // ********** Elements **********

  pizzaPicture: {
    width: 175,
    height: 150,
    borderRadius: 8,
  },
  pizzaName: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  pizzaPrice: {
    fontSize: 20,
    marginRight: 20,
  },
})
