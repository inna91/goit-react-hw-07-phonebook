import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import * as contactsActions from '../../redux/contacts-actions';
import { deleteContact } from '../../redux/contacts-operations';
import { filteredContacts } from '../../redux/contacts-selectors';

const ContactsList = () => {
  const contactsByFilter = useSelector(filteredContacts);
  const dispatch = useDispatch();
  // const loadingContacts = useSelector(getIsLoading);

  const onDeleteContact = id => dispatch(deleteContact(id));

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, []);

  return (
    <ul className={s.list}>
      {contactsByFilter.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactsList;
