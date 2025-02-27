import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { useState, useContext } from "react";

import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import Camera from "../../../Components/Camera";
import Location from "../../../Components/Location";

import { ContactContext } from "../../../store/context/contacts-context";
import { validateFields } from "../../../utils/validation";
import { storeContact } from "../../../utils/http";

function AddContactForm({ navigation }) {
  const contactCtx = useContext(ContactContext);
  const [errors, setErrors] = useState({});
  const [fields, setFields] = useState({
    name: "",
    cellphone: "",
    phone: "",
    email: "",
    image: "",
    location: {
      lat: "",
      lon: "",
      address: "",
    },
  });

  function InputHandler(field, value) {
    setFields((fields) => ({
      ...fields,
      [field]: value,
    }));
  }

  async function SaveHandler() {
    const validationErrors = validateFields(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await storeContact(fields);
    if (response.status === "OK") {
      contactCtx.addContact({ ...fields, id: response.firebaseId });
      navigation.navigate("MainPage");
    } else {
      Alert.alert(
        "Erro ao salvar:",
        "Não foi possível se conectar ao servidor."
      );
    }
  }

  function handleImagePicked(imageUri) {
    InputHandler("image", imageUri);
  }

  function handleLocationPicked(locationObject) {
    InputHandler("location", locationObject);
  }

  return (
    <>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.formContainer}
      >
        <Camera
          children={"Adicionar Foto"}
          image={null}
          onImagePicked={handleImagePicked}
        />
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
        <Location onLocationPicked={handleLocationPicked} />
      </ScrollView>
      <Button title="Salvar" onPress={SaveHandler} />
    </>
  );
}

export default AddContactForm;

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    flexGrow: 1,
    height: "70%",
    marginVertical: 0,
  },
});
