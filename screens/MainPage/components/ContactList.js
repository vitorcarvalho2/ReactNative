import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styleColors from '../../../assets/static/colors';

import { ContactContext } from '../../../store/context/contacts-context';
import { fetchContacts } from '../../../utils/http';

function ContactList({navigation, query}) {  
    const contactsContext = useContext(ContactContext);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function getContacts() {
            try {
                const contactsFromDB = await fetchContacts();
                contactsContext.setContacts(contactsFromDB.data);
                setContacts(contactsFromDB.data);
            }
            catch (error) {
                Alert.alert("Erro ao carregar contatos:", "Não foi possível se conectar ao servidor.");
            }
        }
        getContacts();
    }, []);

    useEffect(() => {
        if (query) {
            setContacts(
                contactsContext.contacts.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase()))
            );
        }
        else {
            setContacts(contactsContext.contacts);
        }
    }, [query])
    
    const deviceWidth = Dimensions.get('window').width;
    const styles = deviceWidth >= 800 ? styleLG : styleSM;

    return (
        
         <View style={styles.body}>
            <FlatList
                style={styles.contactList}
                contentContainerStyle={{alignItems: 'start'}}
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.contactCard}>
                        <View style={styles.infoSection}>
                            <Icon 
                                name="person-circle" 
                                size={deviceWidth >= 800 ? 100 : 60} 
                                color={styleColors.primary100} 
                            />
                            <Text style={styles.infoText}>
                                {item.name}
                            </Text>
                        </View>
                        <Icon 
                            name="pencil-sharp" 
                            size={deviceWidth >= 800 ? 45 : 30} 
                            color={styleColors.primary100}
                            onPress={() => navigation.navigate('EditContact', {id: item.id})} 
                        />
                    </View>
                )}
            >   
            </FlatList>
        </View>
    )
}

const styleSM = StyleSheet.create({
    body: {
        alignItems: 'center',
        backgroundColor: styleColors.secondary300,
        flex: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        width: "100%",
    },
    contactCard: {
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: styleColors.primary100,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-around',
        marginBottom: 10,
        width: "90%",
    },
    contactList: {
        flexDirection: 'column',
        height: "100%",
        width: "100%",
    },
    infoSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'start',
        width: "70%",
    },
    infoText: {
        color: styleColors.primary100,
        fontSize: 20,
        fontWeight: 'Bold',
        marginLeft: 10,
    },
});

const styleLG = StyleSheet.create({
    body: {
        alignItems: 'center',
        backgroundColor: styleColors.secondary300,
        flex: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        width: "100%",
    },
    contactCard: {
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: styleColors.primary100,
        flexDirection: 'row',
        height: 150,
        justifyContent: 'space-around',
        marginBottom: 10,
        width: "90%",
    },
    contactList: {
        flexDirection: 'column',
        height: "100%",
        marginTop: 5,
        width: "100%",
    },
    infoSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'start',
        width: "70%",
    },
    infoText: {
        color: styleColors.primary100,
        fontSize: 30,
        fontWeight: 'Bold',
        marginLeft: 10,
    },
});

export default ContactList;