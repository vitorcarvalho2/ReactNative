import { StatusBar } from "expo-status-bar";
import ContactsContextProvider from "./store/context/contacts-context";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styleColors from "./assets/static/colors";
import { stylesHeaderText } from "./assets/static/styles";

import MainPage from "./screens/MainPage/MainPage";
import AddContact from "./screens/AddContact/AddContact";
import EditContact from "./screens/EditContact/EditContact";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ContactsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: styleColors.secondaryColor,
                paddingVertical: 60,
              },
            }}
          >
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={({ navigation }) => ({
                headerTitle: "Contatos",
                headerStyle: {
                  backgroundColor: styleColors.secondaryColor,
                },
                headerTitleStyle: stylesHeaderText,
                headerRight: () => (
                  <Icon
                    name="add-outline"
                    size={40}
                    color={styleColors.primaryColor}
                    onPress={() => navigation.navigate("AddContact")}
                  />
                ),
                headerLeft: () => (
                  <Icon
                    name="search-outline"
                    size={40}
                    color={styleColors.primaryColor}
                    onPress={() => console.log("Press")}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="AddContact"
              component={AddContact}
              options={{ headerTitle: "Adicionar" }}
            />
            <Stack.Screen
              name="EditContact"
              component={EditContact}
              options={() => ({
                headerTitle: "Editar contato",
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ContactsContextProvider>
    </>
  );
}
