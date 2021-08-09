import React, { Component } from 'react';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    const { isEdit } = this.props;
    const { email } = this.state;
    return (
      <div>
        <p>Email:</p>
        {isEdit === true
          ? <input 
            type='email' 
            value={email}
            onChange={this.handleChange}
            placeholder='Email' />
          : <p id='email'>
              {email === '' ? 'example@domain.com' : email}
            </p>
        }
      </div>
    );
  }
}

export default Email;
