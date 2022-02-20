import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    const findedName = contacts.find(contact => contact.name.toLowerCase() === normalizedName);

    if(findedName) {
      alert(`${name} is already in contacts!`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number
      };
      this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
    };
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    
    return (
      <div className="Phonebook">
        <h1 className="Phonebook__header">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2 className="ContactList__header">Contacts</h2>
        <Filter 
          value={filter}
          handleChange={this.handleFilterChange}

        />
        <ContactList 
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
