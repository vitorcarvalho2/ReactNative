import { View, Pressable, Text, StyleSheet } from "react-native";

import styleColors from "../assets/static/colors";
function Button({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Text style={styles.input}>{title}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

  },
  input: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: styleColors.primary100,
    color: styleColors.secondary300,
    padding: 10,
    width: "100%",
    backgroundColor: styleColors.primary100,
    elevation: 5,
    marginHorizontal: 20,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },

});
