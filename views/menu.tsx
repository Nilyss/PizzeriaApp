import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// components
import { Header } from '../components/header'
import { Cards } from '../components/cards'
interface MenuProps {
  navigation: any
}

export const Menu: React.FunctionComponent<MenuProps> = ({}) => {
  const styles = StyleSheet.create({
    container: {
      marginTop: 100,
      marginBottom: 100,
      paddingRight: 20,
      paddingLeft: 20,
    },
  })

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <Cards />
      </View>
    </ScrollView>
  )
}
