import React from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  // Генерация уникальных идентификаторов для полей формы
  nameInputId = nanoid();
  numberInputId = nanoid();

  // Обработка отправки формы
  handleSubmit = event => {
    event.preventDefault();

    // Вызов функции onSubmit из родительского компонента с передачей объекта контакта
    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    // Сброс состояния формы
    this.reset();
  };

  // Обработка изменения значений полей формы
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Сброс состояния формы
  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    return (
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={this.handleSubmit}>
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor={this.nameInputId}
          >
            Name
            <input
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor={this.numberInputId}
          >
            Number
            <input
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Add contact{' '}
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
