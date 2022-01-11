import React from "react";
import {
  useFonts,
  DancingScript_400Regular,
} from "@expo-google-fonts/dancing-script";
import { Cardo_400Regular } from "@expo-google-fonts/cardo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, Text, View, StatusBar } from "react-native";

import { Home } from "./src/home";
import { Day } from "./src/day";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    DancingScript_400Regular,
    Cardo_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          width: Dimensions.get("window").width,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>Loading...</Text>
      </View>
    );
  }
  return (
    <>
      <StatusBar backgroundColor="#ffb792" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" headerMode={false}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="day" component={Day} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
