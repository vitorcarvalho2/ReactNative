import { View, Text, StyleSheet, Dimensions } from "react-native";
import styleColors from '../../../assets/static/colors';
import colors from "../../../assets/static/colors";

function AppBar() {
  const deviceWidth = Dimensions.get('window').width;
  const styles = deviceWidth >= 800 ? styleLG : styleSM;

  return (
    <View style={styles.appBar}>
      <Text style={styles.AppBarText}>Pessoas</Text>
    </View>
  );
}

export default AppBar;

const styleLG = StyleSheet.create({
  appBar: {
      flex: 1.2,
      width: "100%",
      backgroundColor: styleColors.primary100,
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
  
    },
    AppBarText: {
      fontSize: 32,
      color: "white",
      fontFamily: " Arial",
      fontStyle: "italic",
      fontVariant: "small-caps",
      justifyContent: "center",
      fontWeight: "bold",
    },
});

const styleSM = StyleSheet.create({
    appBar: {
        flex: 1.1,
        width: "100%",
        backgroundColor: styleColors.primary100,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    
      },
      AppBarText: {
        fontSize: 22,
        color: colors.secondary300,
        fontFamily: " Arial",
        fontStyle: "italic",
        fontVariant: "small-caps",
        justifyContent: "center",
        fontWeight: "bold",
      },
});