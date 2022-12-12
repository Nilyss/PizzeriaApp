import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// components
import { Header } from "../components/header";
import { Menu } from "../components/menu";
interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  const styles = StyleSheet.create({
    container: {
      marginTop: 100,
      marginBottom: 100,
      paddingRight: 20,
      paddingLeft: 20,
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Menu />
      </View>
    </ScrollView>
  );
};
