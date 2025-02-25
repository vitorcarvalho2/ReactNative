import { View, Text, StyleSheet, Modal } from "react-native";
import globalStyleColors from "../../../assets/static/colors";
import Icon from "react-native-vector-icons/Ionicons";

function DeleteContact({ onClose, onConfirm }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
      visible
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Confirmar Exclusão</Text>
          <Text style={styles.message}>
            Tem certeza que deseja excluir este contato?
          </Text>
          <View style={styles.buttonContainer}>
            <Icon
              name="close"
              size={30}
              color={globalStyleColors.primary100}
              onPress={onClose}
              style={styles.button}
            />
            <Icon
              name="checkmark"
              size={30}
              color={globalStyleColors.primary100}
              onPress={onConfirm}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalStyleColors.secondary200,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: globalStyleColors.primary100,
    width: "80%",
  },
  title: {
    color: globalStyleColors.primary100,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    color: globalStyleColors.primary100,
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
    backgroundColor: globalStyleColors.secondary100,
    borderRadius: 100,
    padding: 10,
    borderWidth: 2,
    borderColor: globalStyleColors.primary100,
  },
});

export default DeleteContact;
