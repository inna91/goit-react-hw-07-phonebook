import React, { useState } from 'react';
import s from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts-selectors';
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
      dispatch(addContact({ name, number }));
    }

    if (contact === '') {
      return alert('Enter values');
    }

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
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
