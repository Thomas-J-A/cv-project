import React, { Component } from 'react';
import EditButton from './EditButton';

class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isEdit: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  toggleEdit() {
    this.setState((prevState) => {
      return { isEdit: !prevState.isEdit };
    });
  }

  render() {
    const { value, isEdit } = this.state;
    return (
      <header>
        {isEdit === true
          ? <input 
              type='text' 
              value={value}
              onChange={this.handleChange}
              placeholder='Name'
            />
          : <p>
              {value === '' ? 'John Doe' : value}
            </p>
        }
        <EditButton
          isEdit={isEdit}
          toggleEdit={this.toggleEdit}
        />
      </header>
    );
  }
}

export default ContentHeader;
