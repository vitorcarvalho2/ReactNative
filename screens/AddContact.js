import { View, StyleSheet, Button, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../assets/static/colors";
import { useState, useContext } from "react";

import { ContactContext } from "../store/context/contacts-context";

function AddContact({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  
  const contactsContext = useContext(ContactContext);

  function SaveHandler() {
    if (!name || !phone) {
      return;
    } 

    contactsContext.addContact({
      name: name,
      phone: phone,
      id: Math.random().toString() + name,
    });

    navigation.navigate('MainPage');
  }

  return (
    <View style={styles.container}>
      <Icon
        name="person-circle"
        size={160}
        color={styleColors.primaryColor}
        marginTop={30}
      />
      <View style={styles.formContainer}>
		<View style={styles.inputContainer}>
			<Icon 
			  name="person-outline" 
			  size={42} 
			  color={styleColors.primaryColor} 
			  />
        	<TextInput
        	  maxLength={16}
        	  onChangeText={(text) => setName(text)}
        	  value={name}
        	  placeholder="Digite o nome"
        	  style={styles.input}
			></TextInput>
		</View>
		<View style={styles.inputContainer}>
			<Icon 
			  name="phone-portrait-outline" 
			  size={40} 
			  color={styleColors.primaryColor} 
			  />
        	<TextInput
        	  maxLength={13}
        	  onChangeText={(text) => setCellphone(text)}
        	  value={cellphone}
        	  placeholder="Digite o celular"
        	  style={styles.input}
			></TextInput>
		</View>
		<View style={styles.inputContainer}>
			<Icon 
			  name="call-outline" 
			  size={40} 
			  color={styleColors.primaryColor} 
			  />
        	<TextInput
        	  maxLength={13}
        	  onChangeText={(text) => setPhone(text)}
        	  value={phone}
        	  placeholder="Digite o telefone"
        	  style={styles.input}
			></TextInput>
		</View>
		<View style={styles.inputContainer}>
			<Icon 
			  name="mail-outline" 
			  size={40} 
			  color={styleColors.primaryColor} 
			  />
        	<TextInput
        	  maxLength={50}
        	  onChangeText={(text) => setEmail(text)}
        	  value={email}
        	  placeholder="Digite o email"
        	  style={styles.input}
			></TextInput>
		</View>						 
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
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: styleColors.primaryColor,
    padding: 10,
    width: "80%",
    maxWidth: "80%",
    backgroundColor: "white",
    elevation: 5,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 50,
  },
  inputContainer: {
	display: "flex",
	flexDirection: "row",
	width: "85%",
	alignItems: "center",
  }
});
