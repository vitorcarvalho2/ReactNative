import { StatusBar } from "expo-status-bar";


import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styleColors from "./assets/static/colors";
import AddContact from "./screens/AddContact";
import MainPage from "./screens/MainPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: styleColors.secondaryColor,
          },
        }}
        >
          <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
          <Stack.Screen name="AddContact" component={AddContact} options={{ headerTitle: "Adicionar" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
