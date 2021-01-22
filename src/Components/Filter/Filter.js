import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import * as contactsActions from '../../redux/contacts-actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Сontact search
      <input
        className={s.input}
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={event =>
          dispatch(contactsActions.changeFilter(event.target.value))
        }
      />
    </label>
  );
};

export default Filter;
