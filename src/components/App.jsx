import { Component } from 'react';
import { Box } from 'components/Box';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = contact => {
    const some = this.state.contacts.some(
      cont => cont.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (some) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  filterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box bg="background" display="flex" flexDirection="column">
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterChange} value={this.state.filter} />
        <ContactsList
          contacts={visibleContacts}
          onDelite={this.deleteContact}
        />
      </Box>
    );
  }
}
