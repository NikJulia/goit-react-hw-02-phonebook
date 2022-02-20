import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

const INITIAL_STATE = {
    name: '',
    number: '',
  };

class ContactForm extends Component {

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
  };

  state = { ...INITIAL_STATE };

  handleChange = e => {
      const { name, value } = e.currentTarget;
  
      this.setState({
        [name]: value
      });
    };

  handleSubmit = e => {
      e.preventDefault();

      this.props.onSubmit(this.state);
      this.reset();
    };

  reset = () => {
      this.setState({ ...INITIAL_STATE });
    };

  render() {
      return (
          <form className="ContactForm" onSubmit={this.handleSubmit}>
              <label className="ContactForm__label">
              Name
                  <input
                      className="ContactForm__input"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                      placeholder="Please enter a name"
                      />
              </label>

              <label className="ContactForm__label">
              Number
                  <input  
                      className="ContactForm__input"
                      type="tel"
                      value={this.state.number}
                      onChange={this.handleChange}
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                      placeholder="Please enter phone number"
                  />
              </label>

              <button className="ContactForm__btn" type='submit'>Add contact</button>
          </form>
      );
  };
};

export default ContactForm;