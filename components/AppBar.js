import { View, Text, StyleSheet } from "react-native";
import styleColors from '../assets/static/colors';

function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.AppBarText}>Pessoas</Text>
    </View>
  );
}

export default AppBar;

const styles = StyleSheet.create({
    appBar: {
        flex: 1.1,
        width: "100%",
        backgroundColor: styleColors.primaryColor,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    
      },
      AppBarText: {
        fontSize: 22,
        color: "white",
        fontFamily: " Arial",
        fontStyle: "italic",
        fontVariant: "small-caps",
        justifyContent: "center",
        fontWeight: "bold",
      },
});