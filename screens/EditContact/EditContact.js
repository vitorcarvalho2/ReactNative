import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../../assets/static/colors";
import { useRoute } from "@react-navigation/native";

import EditContactForm from "./components/EditContactForm";

function EditContact({navigation}) {
    const route = useRoute();
    const selectedId = route.params.id;

    return (
        <View style={styles.container}>
            <Icon
                name="person-circle"
                size={160}
                color={styleColors.primaryColor}
                marginTop={30}
            />
            <EditContactForm navigation={navigation} selectedId={selectedId}/>
        </View>
      );
}

export default EditContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleColors.secondaryColor,
    alignItems: "center",
  },
});
