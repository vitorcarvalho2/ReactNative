import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styleColors from '../assets/static/colors';

function ContactList() {
    const mockContacts = [
        { name: 'Fulano', id: '1' },
        { name: 'Ciclano', id: '2' },
        { name: 'Beltrano', id: '3' },
        { name: 'Pai do Fulano', id: '4' },
        { name: 'Pai do Ciclano', id: '5' },
        { name: 'Pai do Beltrano', id: '6' },
        { name: 'Mãe do Fulano', id: '7' },
        { name: 'Mãe do Ciclano', id: '8' },
        { name: 'Mãe do Beltrano', id: '9' },
        { name: 'Irmão do Fulano', id: '10' },
        { name: 'Irmão do Ciclano', id: '11' },
        { name: 'Irmão do Beltrano', id: '12' },
        { name: 'Primo do Fulano', id: '13' },
        { name: 'Primo do Ciclano', id: '14' },
        { name: 'Primo do Beltrano', id: '15' },
        { name: 'Prima do Fulano', id: '16' },
        { name: 'Prima do Ciclano', id: '17' },
        { name: 'Prima do Beltrano', id: '18' },
        { name: 'Vó do Fulano', id: '19' },
        { name: 'Vó do Ciclano', id: '20' },
        { name: 'Vó do Beltrano', id: '21' },
        { name: 'Vô do Fulano', id: '22' },
        { name: 'Vô do Ciclano', id: '23' },
        { name: 'Vô do Beltrano', id: '24' },
        { name: 'Tio do Fulano', id: '25' },
        { name: 'Tio do Ciclano', id: '26' },
        { name: 'Tio do Beltrano', id: '27' },
        { name: 'Tia do Fulano', id: '28' },
        { name: 'Tia do Ciclano', id: '29' },
        { name: 'Tia do Beltrano', id: '30' },
      ];

    const [contacts, setContacts] = useState([...mockContacts]);

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
                        {item.img ? <View></View> : <Icon name="person-circle" size={60} color="rgb(3, 36, 14)" />}
                        <Text style={styles.infoText}>{item.name}</Text>
                      </View>
                      <Icon name="pencil-sharp" size={25} color="rgb(3, 36, 14)" />
                    </View>
                )}
            >   
            </FlatList>
        </View>
    )
}

export default ContactList;

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        backgroundColor: styleColors.secondaryColor,
        flex: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        width: "100%",
    },
    contactCard: {
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: styleColors.borderColorOpaque,
        flexDirection: 'row',
        height: 100,
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
        color: styleColors.textColor,
        fontSize: 20,
        fontWeight: 'Bold',
        marginLeft: 10,
    },
});