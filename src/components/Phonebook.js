import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
// import Header from './header/Header';
import Form from './form/Form';
import Section from './section/Section';
import ContactsList from './contacts/ContactsList';
import FindContact from './findContact/FindContact';
import { Empty, Used } from './notification/Notification';
import contactsOperations from '../redux/contacts/contactsOperations';
import styles from './Phonebook.module.css';

class Phonebook extends Component {
    componentDidMount() {
        this.props.onFetchContacts();
    }

    render() {
        return (
            <>
                {/* <CSSTransition
                    in={true}
                    appear={true}
                    classNames={styles}
                    timeout={500}
                    unmountOnExit
                >
                    <Header title="" />
                </CSSTransition> */}

                <Section title="Phonebook">
                    <Form />
                </Section>

                {this.props.loading && <h2>Loading</h2>}
                {this.props.contacts.length > 1 && (
                    <Section title="Finder contacts">
                        <FindContact />
                    </Section>
                )}

                {this.props.contacts.length > 0 && (
                    <Section title="My Contacts">
                        <ContactsList />
                    </Section>
                )}

                <CSSTransition
                    in={this.props.showEmptyAlert}
                    timeout={250}
                    classNames={styles}
                    unmountOnExit
                >
                    <Empty />
                </CSSTransition>

                <CSSTransition
                    in={this.props.showUsedAlert}
                    timeout={250}
                    classNames={styles}
                    unmountOnExit
                >
                    <Used />
                </CSSTransition>
            </>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.reducerContacts.contacts,
    showUsedAlert: state.reducerContacts.showUsedAlert,
    showEmptyAlert: state.reducerContacts.showEmptyAlert,
    loading: state.reducerContacts.loading,
});

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
