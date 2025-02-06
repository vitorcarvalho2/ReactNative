import { StyleSheet, View } from 'react-native';

import AppBar from './components/AppBar';
import ContactList from './components/ContactList';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      {/* AppBar */}
      <AppBar />
      {/* Body */}
      <ContactList />
      {/* Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
