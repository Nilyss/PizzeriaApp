import React from 'react'
import { Button, ScrollView, StyleSheet } from 'react-native'

// components
import { Header } from '../components/header'
import { HomeMain } from '../components/homeMain'

interface HomeProps {
  navigation: any
}

export const Home: React.FunctionComponent<HomeProps> = ({ navigation }) => {
  function goToPizza() {
    navigation.navigate('pizza')
  }
  return (
    <ScrollView style={styles.container}>
      <Header />
      <HomeMain {...navigation} />
      <Button
        color="#FF7F50"
        title="Consulter le panier"
        onPress={() => goToPizza()}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
})
