import axios from 'axios';

export async function storeContact(contactData) {
    try {
        const response = await axios.post('https://react-native-de004-default-rtdb.firebaseio.com/contacts.json', contactData);
        return { status: 'OK', firebaseId: response.data.name };
    } catch (error) {
        return { status: 'ERROR' };
    }
}