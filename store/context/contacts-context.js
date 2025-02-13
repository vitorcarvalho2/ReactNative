import { createContext, useState } from 'react';

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
    addContact: (contact) => {},
    removeContact: (contact) => {}
});

function ContactsContextProvider({children}) {
    const [contacts, setContacts] = useState([...mockContacts]);

    function addContact(newContact) {
        setContacts((currentContacts) => [...currentContacts, newContact]);
    }

    function removeContact(selectedContact) {
        setContacts((currentContacts) => {
            return currentContacts.filter((contact) => contact.id !== selectedContact.id);
        });
    }

    function editContact(newContactData) {
        setContacts((currentContacts) => {
            return currentContacts.map((contact) => {
                if (contact.id === newContactData.id) {
                    return {
                        name: newContactData.name,
                        phone: newContactData.phone, 
                        id: contact.id
                    };
                }
                return contact;
            });
        });
    }

    const value = {
        contacts: contacts,
        addContact: addContact,
        removeContact: removeContact,
        editContact: editContact,
    }

    return (
    <ContactContext.Provider value={value}>
        {children}
    </ContactContext.Provider>
    );
}

export default ContactsContextProvider;
