import { View, TextInput, StyleSheet } from 'react-native';
import styleColors from '../../../assets/static/colors';
import Icon from "react-native-vector-icons/Ionicons";

function Input({icon, textInputConfig}) {
    return (
        <View style={styles.inputContainer}>
            <Icon
                name={icon}
                size={45}
                color={styleColors.primaryColor}
            />
            <TextInput
                style={styles.input}
                {...textInputConfig}
            ></TextInput>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 16,
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: styleColors.primaryColor,
    padding: 10,
    width: "80%",
    maxWidth: "80%",
    backgroundColor: "white",
    elevation: 5,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
  },
});
