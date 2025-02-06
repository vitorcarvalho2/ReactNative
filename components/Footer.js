import { View, StyleSheet } from "react-native";

import styleColors from '../assets/static/colors';

function Footer() {
  return (
    <View style={styles.footer}></View>
  );
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flex: 0.2,
        width: "100%",
        backgroundColor: styleColors.primaryColor,
        bottom: 0,
    },
});