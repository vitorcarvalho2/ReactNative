import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import styleColors from "../../assets/static/colors";
import { stylesHeaderText } from "../../assets/static/styles";

import AppBar from "./components/AppBar";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";

function MainPage({ navigation }) {
  const [query, setQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = useCallback((text) => {
    setQuery(text);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Contatos",
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
          color={styleColors.primary100}
          onPress={() => setIsSearchVisible(!isSearchVisible)}
        />
      ),
    });
  }, [navigation, isSearchVisible]);

  return (
      <View style={styles.container}>
        {isSearchVisible ? (
          <TextInput
            style={styles.input}
            placeholder="Procurar"
            value={query}
            onChangeText={handleSearch}
            autoFocus={true}
          />
        ) : (
          <AppBar />
        )}
        <ContactList navigation={navigation} query={query} />
        <Footer />
      </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: styleColors.primary100,
    alignItems: "center",
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: styleColors.primary200,
    padding: 10,
    width: "90%",
    backgroundColor: styleColors.secondary400,
    elevation: 5,
    margin: 10,
  },
});
