import React from 'react';
import ContactsList from './Components/ContactsList/ContactsList';
import Form from './Components/Form/Form';
import Filter from './Components/Filter/Filter';
import s from './App.module.css';
import TotalNumber from './Components/TotalNumber/TotalNumber';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Section from './Components/Section/Section';
import { getContacts } from './redux/contacts-selectors';
import { fetchContacts } from './redux/contacts-operations';

function App() {
  const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Section title="Phonebook">
        <Form />
      </Section>
      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <TotalNumber />
          <ContactsList />
        </Section>
      ) : null}
    </div>
  );
}

export default App;
