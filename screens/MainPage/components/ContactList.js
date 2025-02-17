import { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styleColors from '../../../assets/static/colors';

import { ContactContext } from '../../../store/context/contacts-context';

function ContactList({navigation}) {
    const contactsContext = useContext(ContactContext);
    
    const deviceWidth = Dimensions.get('window').width;
    const styles = deviceWidth >= 800 ? styleLG : styleSM;

    return (
         <View style={styles.body}>
            <FlatList
                style={styles.contactList}
                contentContainerStyle={{alignItems: 'start'}}
                data={contactsContext.contacts}
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
        fontSize: 25,
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