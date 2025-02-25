import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styleColors from "../../assets/static/colors";
import AddContactForm from "./components/AddContactForm";
import { LinearGradient } from "expo-linear-gradient";

function AddContact({ navigation }) {
  return (
    <>
    <LinearGradient
        colors={[styleColors.secondary400, styleColors.secondary100]}
        style={{ flex: 1 }}
      >
      <View style={styles.container}>
        <Icon
          name="person-circle"
          size={160}
          color={styleColors.primary100}
          marginTop={30}
        />
        <AddContactForm navigation={navigation} />
      </View>
      </LinearGradient>
    </>
  );
}

export default AddContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
