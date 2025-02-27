import { View, StyleSheet } from "react-native";
import styleColors from "../../assets/static/colors";
import { useRoute } from "@react-navigation/native";

import EditContactForm from "./components/EditContactForm";
import { LinearGradient } from "expo-linear-gradient";

function EditContact({ navigation }) {
  const route = useRoute();
  const selectedId = route.params.id;

  return (
    <>
      <LinearGradient
        colors={[styleColors.secondary400, styleColors.secondary100]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <EditContactForm navigation={navigation} selectedId={selectedId} />
        </View>
      </LinearGradient>
    </>
  );
}

export default EditContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
