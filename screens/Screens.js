import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styleColors from "../assets/static/colors";

import CallContact from "./CallContact/CallContact";
import MainPage from "./MainPage/MainPage";
import AddContact from "./AddContact/AddContact";
import EditContact from "./EditContact/EditContact";


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: "center",
                
                headerStyle: {
                  backgroundColor: styleColors.primary200,
                  paddingVertical: 60,
                },
              }}
            >
              <Stack.Screen
                name="MainPage"
                component={MainPage}
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
              <Stack.Screen
                name="CallContact"
                component={CallContact}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
      </NavigationContainer>
    );
}