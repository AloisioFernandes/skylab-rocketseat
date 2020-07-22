import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/main";
import Product from "./pages/product";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="screen"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#DA552F",
          },
          headerTintColor: "#FFF",
        }}
      >
        <AppStack.Screen name="JSHunt" component={Main} />
        <AppStack.Screen name="Product" component={Product} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
