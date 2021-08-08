import React, { Component } from 'react';

class EditButton extends Component {
  render() {
    const { isEdit, toggleEdit } = this.props;
    return (
      isEdit === true
        ? <i className='far fa-check-circle' onClick={toggleEdit} /> 
        : <i className='far fa-edit' onClick={toggleEdit} />
    );
  }
}

export default EditButton;
