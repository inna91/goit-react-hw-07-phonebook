import React from 'react';
import ContactsList from './Components/ContactsList/ContactsList';
import Form from './Components/Form/Form';
import Filter from './Components/Filter/Filter';
import s from './App.module.css';
import TotalNumber from './Components/TotalNumber/TotalNumber';
import Section from './Components/Section/Section';

function App() {
  return (
    <div className={s.container}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <TotalNumber />
        <ContactsList />
      </Section>
    </div>
  );
}

export default App;
