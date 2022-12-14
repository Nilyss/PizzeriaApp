import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

// view
import { Home } from "../views/home";
import { Menu } from "../views/menu";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
