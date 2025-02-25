import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Alert,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../assets/static/colors";
import { useEffect, useState } from "react";
import {
  launchImageLibraryAsync,
  launchCameraAsync,
  useMediaLibraryPermissions,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import LocalData from "../store/context/LocalData";

function Camera({ onImagePicked, existingImage, children }) {
  const [pickedImage, setPickedImage] = useState(existingImage || null);
  const [modalVisible, setModalVisible] = useState(false);

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [mediaLibraryPermissionInformation, requestMediaLibraryPermission] =
    useMediaLibraryPermissions();

  useEffect(() => {
    if (existingImage) {
      setPickedImage(existingImage);
    }
  }, [existingImage]);

  async function verifyCameraPermissions() {
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

  async function verifyGalleryPermissions() {
    if (
      mediaLibraryPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permitionResponse = await requestMediaLibraryPermission();
      return permitionResponse.granted;
    }

    if (mediaLibraryPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyCameraPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!image.assets || image.assets.length === 0) {
      Alert.alert("Erro", "Não foi possível recuperar a imagem.");
      return;
    }
    const pickedImageObject = image.assets[0];
    const localPath = await LocalData(pickedImageObject.uri);
    setPickedImage(localPath);
    onImagePicked(localPath);
    setModalVisible(false);
  }

  async function getImageHandler() {
    const hasPermission = await verifyGalleryPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!image.assets || image.assets.length === 0) {
      Alert.alert("Erro", "Não foi possível recuperar a imagem.");
      return;
    }

    const pickedImageObject = image.assets[0];
    const localPath = await LocalData(pickedImageObject.uri);
    setPickedImage(localPath);
    onImagePicked(localPath);
    setModalVisible(false);
  }

  function openModal() {
    setModalVisible(true);
  }

  return (
    <View style={styles.iconContainer}>
      {pickedImage ? (
        <Image
          source={{ uri: pickedImage }}
          style={styles.image}
          onError={() => setPickedImage(null)}
        />
      ) : (
        <Icon
          style={styles.icon}
          name="person-circle"
          size={160}
          color={styleColors.primary100}
        />
      )}
      <Pressable onPress={openModal}>
        <Text style={styles.addImageText}>{children}</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Icon
              name="close"
              size={30}
              color={styleColors.primary100}
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            />
            <Text style={styles.title}>Escolha a Opcao</Text>
            <View style={styles.buttonContainer}>
              <Icon
                name="image-outline"
                size={30}
                color={styleColors.primary100}
                onPress={getImageHandler}
                style={styles.button}
              />
              <Icon
                name="camera"
                size={30}
                color={styleColors.primary100}
                onPress={takeImageHandler}
                style={styles.button}
              />
            </View>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: styleColors.secondary200,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: styleColors.primary100,
    width: "80%",
  },
  title: {
    color: styleColors.primary100,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    color: styleColors.primary100,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: styleColors.secondary100,
    borderRadius: 100,
    padding: 10,
    borderWidth: 2,
    borderColor: styleColors.primary100,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
