import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

// view
import { Home } from "./views/home";

export default function App() {
  const styles = StyleSheet.create({});
  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
