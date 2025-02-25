import { View, Text, Pressable, StyleSheet,Image, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../../../assets/static/colors";

import { useState } from "react";

import {
  launchImageLibraryAsync,
  launchCameraAsync,
  useMediaLibraryPermissions,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

function Camera({onImagePicked}) {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
  useMediaLibraryPermissions();
  //useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permitionResponse = await requestPermission();
      return permitionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }
    return true;
  }

  async function getImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    //const image = await launchCameraAsync();
    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const imageUri = image.assets?.[0]?.uri;

    if (!image.assets || image.assets.length === 0) {
      Alert.alert("Erro", "Não foi possível recuperar a imagem.");
      return;
    }

    const pickedImageObject = image.assets[0]; 
    setPickedImage(pickedImageObject.uri); 
    onImagePicked(pickedImageObject);
  }

  let image = (
    <Icon
      style={styles.icon}
      name="person-circle"
      size={160}
      color={styleColors.primary100}
    />
  );
  if (pickedImage) {
    image = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }

  return (
    <View style={styles.iconContainer}>
      {image}
      <Pressable onPress={getImageHandler}>
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
    marginBottom: 20,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 90,
    marginBottom: 20,
    borderColor: styleColors.primary200,
    borderWidth: 4,
  },
});
