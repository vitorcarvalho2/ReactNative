import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styleColors from "../assets/static/colors";
import { stylesHeaderText } from "../assets/static/styles";

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
    );
}