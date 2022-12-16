import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Pizza } from '../models/pizza'
import { PizzaContext } from '../context'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import {
  addToCar,
  removeFromCart,
  subtractFromCart,
} from '../redux/quantitySlice'

interface CartProps {}

export const CartMain: React.FunctionComponent<CartProps> = ({}) => {
  // ********** GET DATAS **********
  const [cart, setCart] = useState<Pizza[]>()
  const [cartPrice, setCartPrice] = useState<number>()
  const pizzas = useContext(PizzaContext)

  // ********** GET REDUX BASKET **********
  const basket = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  // *********** FIND CART ELEMENTS **********

  useEffect(() => {
    const getRequestPizza = async (): Promise<void> => {
      try {
        let foundPizzas: Pizza[] = []
        let totalPrice: number = 0.0

        basket.cartArray.forEach((data) => {
          pizzas.forEach((pizzaFromBasket: Pizza) => {
            if (pizzaFromBasket._id === data.id) {
              pizzaFromBasket.quantity = data.quantity
              foundPizzas = foundPizzas.concat(pizzaFromBasket)
              totalPrice += parseFloat(pizzaFromBasket.price) * data.quantity
            }
          })
        })
        setCart(foundPizzas)
        setCartPrice(totalPrice)
      } catch (error) {
        return console.log(error)
      }
    }
    getRequestPizza()
  }, [basket])

  // ********** HANDLE FUNCTION **********

  const handleDecreaseQuantity = (id: Pizza['_id']) => {
    subtractFromCart({ payload: id })
  }

  const handleIncreaseQuantity = (id: Pizza['_id']) => {
    addToCar({ payload: id })
  }

  const handleRemoveFromCart = (id: Pizza['_id']) => {
    removeFromCart({ payload: id })
  }

  return (
    <View>
      {cart &&
        cart.map((pizza: Pizza, index: number) => {
          return (
            <View key={index}>
              <View style={styles.menuWrapper}>
                <View style={styles.cardWrapper}>
                  <Image
                    source={{ uri: pizza.picture }}
                    style={styles.pizzaPicture}
                  />
                  <View style={styles.cardWrapper__text}>
                    <Text style={styles.pizzaName}>{pizza.name}</Text>
                    <Text style={styles.pizzaPrice}>{pizza.price} €</Text>
                    <Text>Quantité dans le panier : {pizza.quantity}</Text>
                    <View style={styles.buttonsWrapper}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          handleIncreaseQuantity(pizza._id)
                          dispatch(addToCar(pizza._id))
                        }}
                      >
                        <Text>+</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          handleDecreaseQuantity(pizza._id)
                          dispatch(subtractFromCart(pizza._id))
                        }}
                      >
                        <Text>-</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          handleRemoveFromCart(pizza._id)
                          dispatch(removeFromCart(pizza._id))
                        }}
                      >
                        <Text>Supprimer</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )
        })}
      <Text>Prix total du panier: {cartPrice} euros.</Text>
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
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
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
  button: {
    marginRight: 20,
  },
})
