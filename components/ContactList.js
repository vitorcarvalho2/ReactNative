import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
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
        { name: 'Vô do Fulano', id: '22' },
        { name: 'Vô do Ciclano', id: '23' },
        { name: 'Vô do Beltrano', id: '24' },
      ];
    const [contacts, setContacts] = useState([...mockContacts]);

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
                                color={styleColors.primaryColor} 
                            />
                            <Text style={styles.infoText}>
                                {item.name}
                            </Text>
                        </View>
                        <Icon 
                            name="pencil-sharp" 
                            size={deviceWidth >= 800 ? 45 : 30} 
                            color={styleColors.primaryColor} 
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
    infoText: {
        color: styleColors.textColor,
        fontSize: 30,
        fontWeight: 'Bold',
        marginLeft: 10,
    },
});

const styleLG = StyleSheet.create({
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
        color: styleColors.textColor,
        fontSize: 30,
        fontWeight: 'Bold',
        marginLeft: 10,
    },
});

export default ContactList;