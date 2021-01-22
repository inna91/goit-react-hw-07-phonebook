import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contacts-actions';

axios.defaults.baseUrl = 'http://localhost:3000';

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export { addContact };
