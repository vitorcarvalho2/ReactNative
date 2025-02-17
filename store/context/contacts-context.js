import { createContext, useState, useReducer } from 'react';

const mockContacts = [
    { name: 'Fulano', phone: "40028922", id: "1" },
    { name: 'Ciclano', phone: "123456789", id: "2" },
    { name: 'Beltrano', phone: "987654321", id: "3" },
    { name: 'Deltrano', phone: "944445555", id: "4" },
    { name: 'João', phone: "944445555", id: "5" },
    { name: 'José', phone: "933335255", id: "6" },
    { name: 'Maria', phone: "974324521", id: "7" },
    { name: 'Pedro', phone: "932254222", id: "8" },
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
            return [...state, {...action.payload}];
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
        dispatch({ 
            type: 'ADD', 
            payload: {
                ...contactData,
                id: Math.random().toString() + contactData.name
            } 
        });
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
