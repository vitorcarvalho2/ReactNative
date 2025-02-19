import { View, Modal, Button, StyleSheet } from "react-native";
import { useState, useContext, useEffect } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import globalStyleColors from "../../../assets/static/colors";
import DeleteContact from "./DeleteContact";

import Input from "./Input";
import { ContactContext } from "../../../store/context/contacts-context";
import { validateFields } from "../../../utils/validation";
import { deleteContact } from "../../../utils/http";

function EditContactForm({ navigation, selectedId }) {
  const contactCtx = useContext(ContactContext);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const contactData = contactCtx.contacts.find(
    (contact) => contact.id === selectedId
  );

  const [fields, setFields] = useState({
    name: contactData?.name ,
    cellphone: contactData?.cellphone ,
    phone: contactData?.phone ,
    email: contactData?.email ,
  });

  const [errors, setErrors] = useState({});

  function InputHandler(field, value) {
    setFields({
      ...fields,
      [field]: value,
    });
  }

  function SaveHandler() {
    const validationErrors = validateFields(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    contactCtx.editContact(fields, selectedId);

    navigation.navigate("MainPage");
  }

  async function DeleteContactHandler() {
    const response = await deleteContact(selectedId);
    setDeleteModalVisible(false);
    if (response.status === "OK") {
      contactCtx.deleteContact(selectedId);
      navigation.navigate("MainPage");
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="trash-outline"
          size={25}
          color={globalStyleColors.primaryColor}
          onPress={() => setDeleteModalVisible(true)}
        />
      ),
    });
  }, []);

  return (
    <>
      <View style={styles.formContainer}>
        {isDeleteModalVisible && (
          <DeleteContact
            onClose={() => setDeleteModalVisible(false)}
            onConfirm={DeleteContactHandler}
          />
        )}
        <Input
          icon="person-outline"
          errorMessage={errors.name}
          textInputConfig={{
            placeholder: "Nome",
            onChangeText: (value) => {
              InputHandler("name", value);
            },
            value: fields.name,
          }}
        />
        <Input
          icon="phone-portrait-outline"
          errorMessage={errors.cellphone}
          textInputConfig={{
            placeholder: "Celular",
            keyboardType: "decimal-pad",
            onChangeText: (value) => {
              InputHandler("cellphone", value);
            },
            value: fields.cellphone,
          }}
        />
        <Input
          icon="call-outline"
          errorMessage={errors.phone}
          textInputConfig={{
            placeholder: "Telefone",
            keyboardType: "decimal-pad",
            onChangeText: (value) => {
              InputHandler("phone", value);
            },
            value: fields.phone,
          }}
        />
        <Input
          icon="mail-outline"
          errorMessage={errors.email}
          textInputConfig={{
            placeholder: "Email",
            onChangeText: (value) => {
              InputHandler("email", value);
            },
            value: fields.email,
          }}
        />
      </View>
      <Button title="Salvar" onPress={SaveHandler} />
    </>
  );
}

export default EditContactForm;

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 50,
  },
});
