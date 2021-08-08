import React, { Component } from 'react';

class EditButton extends Component {
  // constructor(props) {
  //   super(props);

  //   this.editContent = this.editContent.bind(this);
  // }

  // editContent(e) {
  //   const section = e.target.parentNode.nodeName;
  //   switch (section) {
  //     case 'HEADER':
  //       console.log('edit header');
  //       break;
  //     case 'ASIDE':
  //       console.log('edit aside');
  //       break;
  //     default:
  //       console.log('Error');
  //   }
  // }

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
