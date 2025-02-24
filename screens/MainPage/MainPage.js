import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import { useState, useContext, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ContactContext } from '../../store/context/contacts-context';

import styleColors from '../../assets/static/colors';
import { stylesHeaderText } from '../../assets/static/styles';

import AppBar from "./components/AppBar";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";

function MainPage({navigation}) {
  const [query, setQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  
  const handleSearch = useCallback((text) => {
      setQuery(text);
  }, []);

  useEffect(() => {
    navigation.setOptions({
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
      ) : <AppBar />}
      <ContactList navigation={navigation} query={query}/>
      <Footer />
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
