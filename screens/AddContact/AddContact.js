import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../../assets/static/colors";

import ContactForm from "./components/ContactForm";

function AddContact({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon
        name="person-circle"
        size={160}
        color={styleColors.primaryColor}
        marginTop={30}
      />
      <ContactForm navigation={navigation}/>
    </View>
  );
}

export default AddContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleColors.secondaryColor,
    alignItems: "center",
  },
});
