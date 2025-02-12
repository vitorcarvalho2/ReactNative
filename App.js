import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";


import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./screens/MainPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name="MainPage" 
              component={MainPage} 
              options={{headerShown: false}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
