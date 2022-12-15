import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// components
import { Header } from '../components/header'
import { Cards } from '../components/cards'
interface MenuProps {}

export const PizzaDetails: React.FunctionComponent<MenuProps> = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View>
        <Cards />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#ffffff',
  },
})
