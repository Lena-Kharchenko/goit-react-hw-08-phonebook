import Notiflix from 'notiflix';
import css from './contactList.module.css';
import { getContacts, selectFilterField } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(selectFilterField);

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );

  return (
    <>
      {contacts.length === 0 ? (
        <div>You haven't contacts</div>
      ) : (
        <ul>
          {filteredContacts().map(({ name, phone, id }) => (
            <li key={id}>
              <span className={css.name}> {name}:</span>
              <span className={css.number}>{phone}</span>
              <button
                type="button"
                id={id}
                onClick={() => {
                  Notiflix.Notify.success(`You delete contact`);
                  dispatch(deleteContacts(id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
