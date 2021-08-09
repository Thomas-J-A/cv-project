import React, { Component } from 'react';

class EditButton extends Component {
  render() {
    const { isEdit, toggleSubmitEdit } = this.props;
    return (
      isEdit === true
        ? <i className='far fa-check-circle' onClick={toggleSubmitEdit} /> 
        : <i className='far fa-edit' onClick={toggleSubmitEdit} />
    );
  }
}

export default EditButton;
