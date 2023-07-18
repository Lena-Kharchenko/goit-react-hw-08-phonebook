import { ContactForm } from 'components/contactForm/contactForm';
import ContactList from 'components/contactList/contactList';
import { ContactFilter } from 'components/contactFilter/contactFilter';

export const Contacts = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </>
  );
};
