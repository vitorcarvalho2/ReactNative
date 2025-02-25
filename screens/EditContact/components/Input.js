import { View, TextInput, Text, StyleSheet } from "react-native";
import styleColors from "../../../assets/static/colors";
import Icon from "react-native-vector-icons/Ionicons";

function Input({ icon, textInputConfig, errorMessage }) {
  const inputStyle = [styles.input];
  let iconColor = styleColors.primary100;

  if (errorMessage) {
    inputStyle.push(styles.inputError);
    iconColor = "red";
  }
  return (
    <>
      <View style={styles.inputContainer}>
        <Icon name={icon} size={45} color={iconColor} />
        <TextInput style={inputStyle} {...textInputConfig}></TextInput>
      </View>
      <View style={styles.errorContainer}>
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      </View>
    </>
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 16,
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: styleColors.primary200,
    padding: 10,
    width: "80%",
    maxWidth: "80%",
    backgroundColor: styleColors.secondary400,
    elevation: 5,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
  },
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    width: "85%",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    alignSelf: "flex-end",
    width: "80%",
    maxWidth: "80%", 
  },
  inputError: {
    borderColor: "red",
  },
});
