import { View, StyleSheet, Button, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../assets/static/colors";
import { useState } from "react";

function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function NameHandler(name) {
    setName(name);
  }
  function PhoneHandler(phone) {
    setPhone(phone);
  }
  function SaveHandler() {
    name = name;
    //props.phone(phone);
    console.log("Salvo");
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
          placeholder="Digite o nome"
          style={styles.input}
          onChangeText={NameHandler}
        ></TextInput>
        <TextInput
          onChangeText={PhoneHandler}
          placeholder="Digite o telefone"
          style={styles.input}
        ></TextInput>
      </View>
      <Button title="Salvar" onPress={SaveHandler} />
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
