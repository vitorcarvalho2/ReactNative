import { createContext, useState, useReducer } from 'react';

const mockContacts = [
    { name: 'Fulano', cellphone: "40028922", phone: "40028922", email: "fulano@gmail.com", id: "1" },
    { name: 'Ciclano', cellphone: "123456789", phone: "123456789", email: "ciclano@gmail.com", id: "2" },
    { name: 'Beltrano', cellphone: "987654321", phone: "987654321", email: "beltrano@gmail.com", id: "3" },
    { name: 'Deltrano', cellphone: "40028922", phone: "1140028922", email: "deltrano@gmail.com", id: "4" },
  ];

export const ContactContext = createContext({
    contacts: [],
    addContact: (contactData) => {},
    removeContact: (selectedId) => {},
    editContact: (contactData, selectedId) => {},
});

function contactsReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, {...action.payload, id: Math.random().toString() + action.payload.name}];
        case 'EDIT':
            return state.map((contact) => {
                if (contact.id === action.payload.id) {
                    return { ...action.payload.data, id: action.payload.id };
                }
                return contact;
            });
        //case 'DELETE':
        //    return state.filter((contact) => contact.id !== action.payload);

        default:
            return state
    }
}

function ContactsContextProvider({children}) {
    const [contacts, dispatch] = useReducer(contactsReducer, mockContacts);

    function addContact(contactData) {
        dispatch({ type: 'ADD', payload: contactData });
    }

    function editContact(contactData, selectedId) {
        dispatch({ type: 'EDIT', payload: {data: contactData, id: selectedId} });
    }

    function deleteContact(selectedId) {
        dispatch({ type: 'REMOVE', payload: selectedId });
    }

    const value = {
        contacts: contacts,
        addContact: addContact,
        editContact: editContact,
        deleteContact: deleteContact,
    }

    return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;

    //const [contacts, setContacts] = useState([...mockContacts]);
//
    //function addContact(newContact) {
    //    setContacts((currentContacts) => [...currentContacts, newContact]);
    //}
//
    //function removeContact(selectedContact) {
    //    setContacts((currentContacts) => {
    //        return currentContacts.filter((contact) => contact.id !== selectedContact.id);
    //    });
    //}
//
    //function editContact(newContactData) {
    //    setContacts((currentContacts) => {
    //        return currentContacts.map((contact) => {
    //            if (contact.id === newContactData.id) {
    //                return {
    //                    name: newContactData.name,
    //                    phone: newContactData.phone, 
    //                    id: contact.id
    //                };
    //            }
    //            return contact;
    //        });
    //    });
    //}
//
    //const value = {
    //    contacts: contacts,
    //    addContact: addContact,
    //    removeContact: removeContact,
    //    editContact: editContact,
    //}

    //return (
    //<ContactContext.Provider value={value}>
    //    {children}
    //</ContactContext.Provider>
    //);
}

export default ContactsContextProvider;
