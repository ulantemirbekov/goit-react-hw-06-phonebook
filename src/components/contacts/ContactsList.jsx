import React from 'react';
import ContactsItem from './contactsItem/ContactsItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const ContactsList = ({ contacts, deleteContact }) => {
    const onHandleDeleteContact = e => {
        const { id } = e.target;
        deleteContact(id);
    };
    return (
        <div>
            {contacts.map(({ name, number, id }) => (
                <ContactsItem
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                    onRemove={onHandleDeleteContact}
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        contacts: contactsSelectors.getContacts(state),
    };
};

const mapDispatchToProps = {
    deleteContact: contactsOperations.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
    deleteContact: PropTypes.func.isRequired,
};
