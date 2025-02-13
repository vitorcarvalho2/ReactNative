import { StatusBar } from "expo-status-bar";
import ContactsContextProvider from "./store/context/contacts-context";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styleColors from "./assets/static/colors";
import MainPage from "./screens/MainPage";
import AddContact from "./screens/AddContact";
import EditContact from "./screens/EditContact";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      	<StatusBar style="dark" />
    	<ContactsContextProvider>
      		<NavigationContainer>
      		    <Stack.Navigator
      		    	screenOptions={{
      		    		headerStyle: {
      		        		backgroundColor: styleColors.secondaryColor,
      		        	},
      		      	}}
      		    >
            		<Stack.Screen 
              			name="MainPage" 
						component={MainPage} 
						options={{ headerShown: false }} 
					/>
              		<Stack.Screen 
						name="AddContact" 
						component={AddContact} 
						options={{ headerTitle: "Adicionar" }}
					/>
					<Stack.Screen 
						name="EditContact" 
						component={EditContact} 
						options={{ headerTitle: "Editar contato" }}
					/>
					
            	</Stack.Navigator>
        	</NavigationContainer>
    	</ContactsContextProvider>
    </>
  );
}
