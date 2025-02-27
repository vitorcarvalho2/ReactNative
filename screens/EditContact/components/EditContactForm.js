import { View, StyleSheet, ScrollView } from "react-native";
import { useState, useContext, useEffect, useCallback } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../../../assets/static/colors";
import DeleteContact from "./DeleteContact";

import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import Camera from "../../../Components/Camera";
import Location from "../../../Components/Location";

import { ContactContext } from "../../../store/context/contacts-context";
import { validateFields } from "../../../utils/validation";
import { updateContact, deleteContact } from "../../../utils/http";

function EditContactForm({ navigation, selectedId }) {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const contactCtx = useContext(ContactContext);

  const contactData = contactCtx.contacts.find(
    (contact) => contact.id === selectedId
  );

  const { name, cellphone, phone, email, image, location } = contactData;

  const [fields, setFields] = useState({
    name: name,
    cellphone: cellphone,
    phone: phone,
    email: email,
    image: image,
    location: location,
  });

  function InputHandler(field, value) {
    setFields({
      ...fields,
      [field]: value,
    });
  }

  const [errors, setErrors] = useState({});

  async function SaveHandler() {
    const validationErrors = validateFields(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const response = await updateContact(fields, selectedId);
    if (response.status === "OK") {
      contactCtx.editContact(fields, selectedId);
      navigation.navigate("MainPage");
    } else {
      Alert.alert(
        "Erro ao salvar:",
        "Não foi possível se conectar ao servidor."
      );
    }
    navigation.navigate("MainPage");
  }

  const DeleteContactHandler = useCallback(async () => {
    const response = await deleteContact(selectedId);
    setDeleteModalVisible(false);
    if (response.status === "OK") {
      contactCtx.deleteContact(selectedId);
      navigation.navigate("MainPage");
    } else {
      Alert.alert(
        "Erro ao apagar:",
        "Não foi possível se conectar ao servidor."
      );
    }
  }, [selectedId, contactCtx, navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="trash-outline"
          size={25}
          color={styleColors.primary100}
          onPress={() => setDeleteModalVisible(true)}
        />
      ),
    });
  }, []);

  function handleLocationPicked(locationObject) {
    InputHandler("location", locationObject);
  }

  return (
    <>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.formContainer}
      >
        {isDeleteModalVisible && (
          <DeleteContact
            onClose={() => setDeleteModalVisible(false)}
            onConfirm={() => DeleteContactHandler()}
          />
        )}
        <Camera
          children={"Editar foto"}
          existingImage={fields.image}
          onImagePicked={(image) => InputHandler("image", image)}
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
        <Location onLocationPicked={handleLocationPicked} locationData={contactData?.location}/>
      </ScrollView>
      <Button title="Salvar" onPress={SaveHandler} />
    </>
  );
}

export default EditContactForm;

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginVertical: 50,
  },
});
