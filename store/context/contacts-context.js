import { createContext, useState, useReducer } from 'react';
import { fetchContacts } from '../../utils/http';

const contactsFromDB = fetchContacts();
console.log(contactsFromDB);

export const ContactContext = createContext({
    contacts: [],
    setContacts: (contacts) => {},
    addContact: (contactData) => {},
    deleteContact: (selectedId) => {},
    editContact: (contactData, selectedId) => {},
});

function contactsReducer(state, action) {
    switch (action.type) {
        case 'SET':
            return action.payload;
        case 'ADD':
            return [...state, {...action.payload}];
        case 'EDIT':
            return state.map((contact) => {
                if (contact.id === action.payload.id) {
                    return { ...action.payload.data, id: action.payload.id };
                }
                return contact;
            });
        case 'DELETE':
            return state.filter((contact) => contact.id !== action.payload);

        default:
            return state
    }
}

function ContactsContextProvider({children}) {
    const [contacts, dispatch] = useReducer(contactsReducer, []);

    function addContact(contactData) {
        dispatch({ type: 'ADD', payload: contactData });
    }

    function setContacts(contacts) {
        dispatch({ type: 'SET', payload: contacts });
    }

    function editContact(contactData, selectedId) {
        dispatch({ type: 'EDIT', payload: {data: contactData, id: selectedId} });
    }

    function deleteContact(selectedId) {
        dispatch({ type: 'DELETE', payload: selectedId });
    }

    const value = {
        contacts: contacts,
        addContact: addContact,
        setContacts: setContacts,
        editContact: editContact,
        deleteContact: deleteContact,
    }

    return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;

}

export default ContactsContextProvider;
