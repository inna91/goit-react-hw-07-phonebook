import React, { useState } from 'react';
import s from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts-selectors';
// import * as contactsActions from '../../redux/contacts-actions';
import { addContact } from '../../redux/contacts-operations';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const existNameHandler = existName => {
    const nameHandler = existName.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === nameHandler);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const sameName = existNameHandler(name);
    const contact = { id: name, name, number };

    if (sameName) {
      alert(`${name} is already in your phonebook`);
    } else {
      //  const contact = { id: name, name, number };
      const contact = { name, number };
      dispatch(addContact(contact));
    }

    if (contact === '') {
      return alert('Enter values');
    }

    resetForm();
    setName('');
    setNumber('');
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={name}>
        Name
        <input
          className={s.input}
          type="text"
          value={name}
          name={'name'}
          onChange={handleChange}
          id={name}
          placeholder="Enter contact name"
          required
        />
      </label>
      <label className={s.label} htmlFor={number}>
        Number
        <input
          className={s.input}
          type="tel"
          name={'number'}
          value={number}
          onChange={handleChange}
          id={number}
          placeholder="Enter contact number"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add the new contact
      </button>
    </form>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onSubmit: contact => dispatch(contactsActions.addContact(contact)),
// });

// export default connect(mapDispatchToProps)(Form);
