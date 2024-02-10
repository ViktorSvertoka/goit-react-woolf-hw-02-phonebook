import React from 'react';

// Компонент списку контактів
const ContactList = ({ contacts, onRemoveContact }) => (
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <ul className="divide-y divide-gray-100">
      {contacts.map(contact => (
        <li className="flex justify-between gap-x-6 py-5" key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            // Кнопка видалення контакту
            <button
              class="flex w-24px justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
