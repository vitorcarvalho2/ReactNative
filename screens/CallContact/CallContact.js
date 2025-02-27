import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../../assets/static/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ContactContext } from "../../store/context/contacts-context";

import { useContext, useState } from "react";

function CallContact() {
  const navigation = useNavigation();
  const route = useRoute();

  const contactCtx = useContext(ContactContext);

  const selectedId = route.params.id;
  const contactData = contactCtx.contacts.find(
    (contact) => contact.id === selectedId
  );

  const [pickedImage, setPickedImage] = useState(contactData.image || null);

  const [isMuted, setIsMuted] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ligando...</Text>

      {pickedImage ? (
        <Image
          source={{ uri: pickedImage }}
          style={styles.image}
          onError={() => setPickedImage(null)}
        />
      ) : (
        <Icon name="person-circle" size={120} color={styleColors.primary100} />
      )}

      <View style={styles.infoContainer}>
        <View style={styles.fields}>
          <Text style={styles.name}>Name:</Text>
          <Text style={styles.name}> {contactData.name}</Text>
        </View>
        <View style={styles.fields}>
          <Text style={styles.cellphone}>Celular:</Text>
          <Text style={styles.cellphone}> {contactData.cellphone}</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.microphone}>
          <Icon
            name={isMuted ? "mic-off" : "mic"}
            size={30}
            color="white"
            onPress={() => setIsMuted((prev) => !prev)} 
          />
        </View>

        <View style={styles.hangup}>
          <Icon
            name="call"
            size={30}
            color="white"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>

        <View style={styles.keyboard}>
          <Icon
            name="keypad"
            size={30}
            color="white"
            onPress={() => setShowKeyboard((prev) => !prev)} 
          />
        </View>
      </View>
    </View>
  );
}

export default CallContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: styleColors.secondary300,
    paddingTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: styleColors.primary100,
  },
  fields: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: styleColors.primary100,
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    color: styleColors.primary100,
    marginBottom: 10,
  },
  cellphone: {
    fontSize: 20,
    color: styleColors.primary100,
  },
  bottomContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    width: "100%",
    height: "25%",
    backgroundColor: styleColors.secondary400,
    alignItems: "center",
    justifyContent: "center",
  },
  hangup: {
    backgroundColor: styleColors.error,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  microphone: {
    backgroundColor: styleColors.primary100,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  keyboard: {
    backgroundColor: styleColors.primary100,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
});
