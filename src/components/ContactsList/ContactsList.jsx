import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ contacts, onDelite }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDelite={onDelite}
        />
      ))}
    </ul>
  );
};
