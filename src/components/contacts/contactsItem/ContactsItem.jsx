import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsItem.module.css';

const ContactsItem = ({ id, name, number, onRemove }) => (
    <li className={styles.item}>
        <span className={styles.span}>√</span>
        <p className={styles.text}>{name}</p>
        <p className={styles.text}>{number}</p>

        <button
            id={id}
            type="button"
            className={styles.button}
            onClick={onRemove}
        ></button>
    </li>
);

export default ContactsItem;

ContactsItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};
