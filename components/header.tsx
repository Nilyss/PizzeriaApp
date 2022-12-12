import React from "react";
import {
  Image,
  InputAccessoryView,
  StyleSheet,
  Text,
  TextInput,
  TextInputBase,
  View,
} from "react-native";

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = ({}) => {
  const logo: string =
    "https://static.vecteezy.com/system/resources/thumbnails/007/958/646/small_2x/cute-pizza-slice-with-red-pepperoni-flat-design-cartoon-for-shirt-poster-gift-card-cover-logo-sticker-and-icon-free-vector.jpg";
  const address: string = "2 allée Olympe de Gouges, 17180 Perigny";

  const styles = StyleSheet.create({
    headerWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    brandingWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    logo: {
      width: 100,
      height: 100,
    },

    title: {
      fontWeight: "bold",
      fontSize: 28,
    },

    addressInput: {
      height: 40,
      margin: 12,
      padding: 10,
      borderWidth: 1,
      borderRadius: 4,
      color: "#FF7F50",
    },
  });
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.brandingWrapper}>
        <Image source={{ uri: logo }} style={styles.logo} />
        <Text style={styles.title}>Turbo Piiizzzz'</Text>
      </View>
      <TextInput style={styles.addressInput} value={address} />
    </View>
  );
};
