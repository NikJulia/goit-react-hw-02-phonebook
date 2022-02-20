import React from "react";
import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
            <ul className="ContactList">
                {contacts.map(({ id, name, number }) => 
                    <li key={id} className="ContactList__item">
                        <span className="ContactList__name">{name}</span>
                        <span className="ContactList__number">{number}</span>
                        <button className="ContactList__btn" onClick={() => onDeleteContact(id)}>Удалить</button>
                    </li>
                )}
            </ul>
    );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
};