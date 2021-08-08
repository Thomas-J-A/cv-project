import React, { Component } from 'react';

class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  render() {
    const { isEdit } = this.props;
    const { phoneNumber } = this.state;
    return (
      <div>
        <p>Phone Number:</p>
        {isEdit === true 
          ? <input 
              type='text' 
              value={phoneNumber}
              onChange={this.handleChange}
              placeholder='Phone Number' />
          : <p>
              {phoneNumber === '' ? '01234567890' : phoneNumber}
            </p>
        }
      </div>
    );
  }
}

export default PhoneNumber;
