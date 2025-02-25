import { View, Text, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styleColors from "../../../assets/static/colors";
const deviceWidth = Dimensions.get("window").width;

function InfoSection({ item }) {
  const [pickedImage, setPickedImage] = useState(item.image || null);

  return (
    <View style={styles.infoSection}>
      {pickedImage ? (
        <Image
          source={{ uri: pickedImage }}
          style={styles.image}
          onError={() => setPickedImage(null)}
        />
      ) : (
        <Icon
          name="person-circle"
          size={deviceWidth >= 800 ? 100 : 60}
          color={styleColors.primary100}
        />
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.infoName}>{item.name}</Text>
        <Text style={styles.infoNumber}>{item.phone}</Text>
      </View>
    </View>
  );
}

export default InfoSection;

const styles = StyleSheet.create({
  infoSection: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "start",
      width: "70%",
    },
    infoName: {
      color: styleColors.primary100,
      fontSize: 22,
      fontWeight: "Bold",
      marginLeft: 10,
    },
    infoNumber: {
      color: styleColors.primary100,
      fontSize: 12,
      marginLeft: 10,
    },
    infoContainer: {
      flexDirection: "column",
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderColor: styleColors.primary200,
    },
});
