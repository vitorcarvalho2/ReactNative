import { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Alert,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styleColors from "../../../assets/static/colors";

import { ContactContext } from "../../../store/context/contacts-context";
import { fetchContacts } from "../../../utils/http";
import InfoSection from "./InfoSection";

function ContactList({ navigation, query }) {
  const contactsContext = useContext(ContactContext);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getContacts() {
      try {
        const contactsFromDB = await fetchContacts();
        contactsContext.setContacts(contactsFromDB.data);
        setContacts(contactsFromDB.data);
      } catch (error) {
        Alert.alert(
          "Erro ao carregar contatos:",
          "Não foi possível se conectar ao servidor."
        );
      }
    }
    getContacts();
  }, []);

  useEffect(() => {
    if (query) {
      setContacts(
        contactsContext.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setContacts(contactsContext.contacts);
    }
  }, [query]);

  const deviceWidth = Dimensions.get("window").width;
  const styles = deviceWidth >= 800 ? styleLG : styleSM;

  return (
    <View style={styles.body}>
      <FlatList
        style={styles.contactList}
        contentContainerStyle={{ alignItems: "start" }}
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("EditContact", { id: item.id })}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <View style={styles.contactCard}>
              <InfoSection item={item} />
              <Icon
                name="call"
                size={deviceWidth >= 800 ? 45 : 30}
                color={styleColors.primary100}
                onPress={() => {
                  navigation.navigate("CallContact", { id: item.id });
                }}
              />
            </View>
          </Pressable>
        )}
      ></FlatList>
    </View>
  );
}

const styleSM = StyleSheet.create({
  body: {
    alignItems: "center",
    backgroundColor: styleColors.secondary300,
    flex: 20,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  contactCard: {
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 2,
    borderColor: styleColors.primary100,
    flexDirection: "row",
    height: 100,
    justifyContent: "space-around",
    marginBottom: 10,
    width: "90%",
  },
  contactList: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  infoSection: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "start",
    width: "70%",
  },
  infoName: {
    color: styleColors.primary100,
    fontSize: 22,
    fontWeight: "Bold",
    marginLeft: 10,
  },
  infoNumber: {
    color: styleColors.primary100,
    fontSize: 12,
    marginLeft: 10,
  },
  infoContainer: {
    flexDirection: "column",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: styleColors.primary200,
  },
});

const styleLG = StyleSheet.create({
  body: {
    alignItems: "center",
    backgroundColor: styleColors.secondary300,
    flex: 20,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  contactCard: {
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 2,
    borderColor: styleColors.primary100,
    flexDirection: "row",
    height: 150,
    justifyContent: "space-around",
    marginBottom: 10,
    width: "90%",
  },
  contactList: {
    flexDirection: "column",
    height: "100%",
    marginTop: 5,
    width: "100%",
  },
  infoSection: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "start",
    width: "70%",
  },
  infoName: {
    color: styleColors.primary100,
    fontSize: 30,
    fontWeight: "Bold",
    marginLeft: 10,
  },
  infoNumber: {
    color: styleColors.primary100,
    fontSize: 16,
    marginLeft: 10,
  },
  infoContainer: {
    flexDirection: "column",
  },
});

export default ContactList;
