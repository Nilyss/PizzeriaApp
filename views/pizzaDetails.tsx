import React from 'react'
import { Button, ScrollView, StyleSheet, View } from 'react-native'

// components
import { Header } from '../components/header'
import { Cards } from '../components/cards'
interface MenuProps {
  navigation: any
}

export const PizzaDetails: React.FunctionComponent<MenuProps> = ({
  navigation,
}) => {
  function goToBasket() {
    navigation.navigate('basket')
  }
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View>
        <Cards />
        <View style={styles.buttonWrapper}>
          <Button
            color="#FF7F50"
            title="Consulter le panier"
            onPress={() => goToBasket()}
          />
        </View>
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
  buttonWrapper: {
    marginTop: 60,
  },
})
