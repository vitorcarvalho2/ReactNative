import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./screens/MainPage";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
