import React from 'react'
import { Button, ScrollView, StyleSheet } from 'react-native'

// components
import { Header } from '../components/header'

interface HomeProps {
  navigation: any
}

export const Home: React.FunctionComponent<HomeProps> = ({ navigation }) => {
  function goToMenu() {
    navigation.navigate('Menu')
  }

  const styles = StyleSheet.create({
    container: {
      paddingRight: 20,
      paddingLeft: 20,
      backgroundColor: 'white',
    },
  })
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Button title="Consulter la carte" onPress={() => goToMenu()} />
    </ScrollView>
  )
}
