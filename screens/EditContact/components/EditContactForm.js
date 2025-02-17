import { View, Alert, Button, StyleSheet } from 'react-native';
import { useState, useContext } from "react";

import Input from './Input';
import { ContactContext } from '../../../store/context/contacts-context';

function EditContactForm({navigation, selectedId}) {
	const contactCtx = useContext(ContactContext);
	const contactData = contactCtx.contacts.find((contact) => contact.id === selectedId);

    const [fields, setFields] = useState({
        name: contactData.name || "",
        cellphone: contactData.cellphone || "",
        phone: contactData.phone || "",
        email: contactData.email || "",
      });

    function InputHandler(field, value) {
      setFields({
        ...fields,
        [field]: value,
      });
    }

    function SaveHandler() {
    	if (!fields.name || !fields.phone || !fields.cellphone || !fields.email) {
    	  Alert.alert("Erro", "Preencha todos os campos");
    	  return;
    	}
		contactCtx.editContact(fields, selectedId);

        navigation.navigate("MainPage");
    }

    return(
        <>
            <View style={styles.formContainer}>
                <Input icon="person-outline" 
                	textInputConfig={{ 
						placeholder: "Nome",
						onChangeText: (value) => { InputHandler("name", value) },
						value: fields.name
					}} 
				/>
                <Input icon="phone-portrait-outline" 
					textInputConfig={{
						placeholder: "Celular", 
						keyboardType: "decimal-pad",
						onChangeText: (value) => { InputHandler("cellphone", value) },
						value: fields.cellphone
					}} 
				/>
                <Input icon="call-outline" 
					textInputConfig={{
						placeholder: "Telefone", 
						keyboardType: "decimal-pad",
						onChangeText: (value) => { InputHandler("phone", value) },
						value: fields.phone
					}} 
				/>
                <Input icon="mail-outline" 
					textInputConfig={{
						placeholder: "Email",
						onChangeText: (value) => { InputHandler("email", value) },
						value: fields.email
					}} 
				/>
            </View>
            <Button title="Salvar" onPress={SaveHandler} />
        </>
    )
}

export default EditContactForm;

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 50,
  },
});