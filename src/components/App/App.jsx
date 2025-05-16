// src/components/App/App.jsx
import { useState } from "react";
import { nanoid } from "nanoid";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  // =========СТАН ФІЛЬТРУ===========//
  const [filter, setFilter] = useState("");

  //=======ВИДАЛЕННЯ КОНТАКУТ=====//

  const deleteContact = (idToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== idToDelete)
    );
  };

  //========= ФИЛЬТР ========//

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  //======ОБРОБНИК=======//

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleAddContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        onAddContact={handleAddContact}
        existingContacts={contacts}
      />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
};

export default App;
