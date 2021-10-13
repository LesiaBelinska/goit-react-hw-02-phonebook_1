import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Filter extends Component {

    filterInputId = shortid.generate();

    render() {
        return (
            <label htmlFor={this.filterInputId}>
                Find contacts by name
                <input
                    type='text'
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </label>
        )
    }
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};