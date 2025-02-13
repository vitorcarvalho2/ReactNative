import { createContext, useState } from 'react';

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
