import { View, Text, Pressable , StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../../../assets/static/colors";

function Camera() {
  return (
    <View style={styles.iconContainer}>
      <Icon
        style={styles.icon}
        name="person-circle"
        size={160}
        color={styleColors.primary100}
      />
      <Pressable onPress={console.log("pressed")}>
        <Text style={styles.addImageText}>Adicionar Foto</Text>
      </Pressable>
    </View>
  );
}

export default Camera;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 36,
  },
  addImageText: {
    color: styleColors.primary100,
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    alignItems: "center",
  }
});
