import axios from 'axios';

const BACKEND_URL = "https://react-native-de004-default-rtdb.firebaseio.com"

export async function storeContact(contactData) {
    try {
        const response = await axios.post(BACKEND_URL + '/contacts.json', contactData);
        return { status: 'OK', firebaseId: response.data.name };
    } catch (error) {
        return { status: 'ERROR' };
    }
}

export async function fetchContacts() {
    try {
        const response = await axios.get(BACKEND_URL + '/contacts.json');

            const contacts = [];

        for (const key in response.data) {
            const contact = {
                ...response.data[key],
                id: key,
            }
            contacts.push(contact);
        }

        return { status: 'OK', data: contacts };

    } catch (error) {
        return { status: 'ERROR' };
    }
}

export async function deleteContact(contactId) {
    try {
        const response = await axios.delete(`${BACKEND_URL}/contacts/${contactId}.json`);
        return { status: 'OK' };
    } catch (error) {
        return { status: 'ERROR', error: error.message };
    }
}