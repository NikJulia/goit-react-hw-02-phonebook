import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ value, handleChange }) => {
    return (
        <div className="Filter">
            <label className="Filter__label">
                Find contacts by name
                <input
                    className="Filter__input"
                    type="text"
                    value={value}
                    onChange={handleChange}
                    name="filter"
                    placeholder="Please enter a name"
                    />
            </label>
        </div>
    );
};

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
};