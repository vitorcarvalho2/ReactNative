import { View, StyleSheet } from "react-native";

import AppBar from "../components/AppBar";
import ContactList from "../components/ContactList";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainPage({navigation}) {
  return (
    <View style={styles.container}>
      <AppBar />
      <ContactList navigation={navigation}/>
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
