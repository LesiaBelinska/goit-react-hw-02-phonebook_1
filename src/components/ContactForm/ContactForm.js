import React, { Component } from 'react';
import PropsType from 'prop-types';
import shortid from 'shortid';

class ContactForm extends Component {
    state = {
    name: '',
    number: '',
  };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
    }
    
    handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    }
    
     reset() {
    this.setState({
      name: '',
      number: ''
    })
    }
    
    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={this.handleChange}
                        id={this.nameInputId}
                    />
                </label>

                <label htmlFor={this.numberInputId}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={this.handleChange}
                        id={this.numberInputId}
                    />
                </label>

                <button
                    className='button'
                    type="submit">
                    Add contact
                </button>
            </form>
        )
    }
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropsType.func.isRequired,
};