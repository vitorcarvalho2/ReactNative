import { createContext, useState } from 'react';

const mockContacts = [
    { name: 'Fulano', phone: "11111111", id: 1 },
    { name: 'Ciclano', phone: "22222222", id: 2 },
    { name: 'Beltrano', phone: "33333333", id: 3 },
    { name: 'João', phone: "44444444", id: 4 },
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

    function removeContact(removedContact) {
        setContacts((currentContacts) => {
            return currentContacts.filter((contact) => contact.id !== removedContact.id);
        });
    }

    const value = {
        contacts: contacts,
        addContact: addContact,
        removeContact: removeContact,
    }

    return (
    <ContactContext.Provider value={value}>
        {children}
    </ContactContext.Provider>
    );
}

export default ContactsContextProvider;
