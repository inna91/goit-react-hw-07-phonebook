import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { deleteContact, fetchContacts } from '../../redux/contacts-operations';
import { filteredContacts, getIsLoading } from '../../redux/contacts-selectors';

const ContactsList = () => {
  const contactsByFilter = useSelector(filteredContacts);
  const loadingContacts = useSelector(getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      {loadingContacts && <Loader />}
      {!loadingContacts && contactsByFilter && contactsByFilter.length > 0 ? (
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
      ) : null}
    </>
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
