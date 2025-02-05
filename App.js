import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="search" size={30} color="#fff" />;
        <Text style={styles.headerText}>Contatos</Text>
        <Icon name="add-outline" size={30} color="#fff" />;
      </View>


      <View style={styles.appBar}>
        <Text style={styles.AppBarText}>Pessoas</Text>
      </View>

      <View style={styles.body}></View>

      <View style={styles.footer}></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    backgroundColor: "#C4D9FF",
    width: "100%",
    marginUp: "100",
    alignItems: "center",
    marginBottom: 4,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: " Arial",
    fontStyle: "italic",
    fontVariant: "small-caps",
    justifyContent: "center",
  },
  appBar: {
    flex: 1,
    width: "100%",
    backgroundColor: "#C4D9FF",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 4,

  },
  AppBarText: {
    fontSize: 20,
    color: "white",
    fontFamily: " Arial",
    fontStyle: "italic",
    fontVariant: "small-caps",
    justifyContent: "center",
    fontWeight: "bold",
  },
  footer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#C4D9FF",
    marginTop: 4,
    bottom: 0,

  },
  body: {
    flex: 20,
    width: "100%",
    backgroundColor: "#C4D9FF",

  },
});
