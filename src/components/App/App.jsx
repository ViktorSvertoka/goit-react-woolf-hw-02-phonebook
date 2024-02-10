import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FcBusinessContact } from 'react-icons/fc';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // Додавання нового контакту до списку контактів
  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  // Зміна значення фільтра
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  // Отримання відфільтрованих контактів
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Видалення контакту зі списку
  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <FcBusinessContact className="mx-auto" size="75" fill="#4f46e5" />
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Phonebook
          </h1>
        </div>

        <ContactForm onSubmit={this.addContact} />

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Contacts
        </h2>
        {this.state.contacts.length > 0 ? (
          // Фільтр для відображення контактів
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        ) : (
          <p className="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-600">
            Your phonebook is empty. Add first contact!
          </p>
        )}
        {this.state.contacts.length > 0 && (
          // Список контактів
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}

export default App;
