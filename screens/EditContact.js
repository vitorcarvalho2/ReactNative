import { View, StyleSheet, Button, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../assets/static/colors";
import { useState, useContext } from "react";
import { useRoute } from "@react-navigation/native";

import { ContactContext } from "../store/context/contacts-context";

function EditContact({navigation}) {
    const route = useRoute();
    const contactsContext = useContext(ContactContext);
    const contactData = contactsContext.contacts.find((contact) => contact.id === route.params.id);

    const [name, setName] = useState(contactData ? contactData.name : "");
    const [phone, setPhone] = useState(contactData ? contactData.phone : "");


  function SaveHandler() {
    if (!name || !phone) {
      return;
    } 

    contactsContext.editContact({
        name: name,
        phone: phone,
        id: route.params.id,
    });

    navigation.navigate('MainPage');
  }


  return (
    <View style={styles.container}>
      <Icon
        name="person-circle"
        size={100}
        color={styleColors.primaryColor}
        marginTop={50}
      />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder=""
          style={styles.input}
        ></TextInput>
        <TextInput
          onChangeText={(text) => setPhone(text)}
          value={phone}
          placeholder=""
          style={styles.input}
        ></TextInput>
      </View>
      <Button title="Salvar" onPress={SaveHandler} />
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
  input: {
    height: 40,
    margin: 16,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    maxWidth: "80%",
    backgroundColor: "white",
    elevation: 5,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 50,
  },
});
