import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
//import styles from "./App.module.css";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

// Початкові контакти
const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [filter, setFilter] = useState("");

  // Завантажуємо контакти з localStorage або використовуємо дефолтні
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    try {
      const parsed = JSON.parse(saved);
      return parsed && parsed.length > 0 ? parsed : defaultContacts;
    } catch {
      return defaultContacts;
    }
  });

  // Синхронізація з localStorage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Додавання контакту
  const handleAddContact = ({ name, number }) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // Видалення контакту
  const deleteContact = (idToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== idToDelete)
    );
  };

  // Зміна фільтра
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Фільтровані контакти
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
