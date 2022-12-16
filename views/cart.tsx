import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { CartMain } from '../components/cartMain'

interface BasketProps {}
export const Cart: React.FunctionComponent<BasketProps> = ({}) => {
  return (
    <ScrollView style={styles.container}>
      <CartMain />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
})
