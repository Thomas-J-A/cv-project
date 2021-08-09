import React, { Component } from 'react';
import PhoneNumber from './PhoneNumber';
import Email from './Email';
import EditButton from './EditButton';
import profilePic from '../../images/profile-pic.jpg';

class ContentAside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true,
    };

    this.toggleSubmitEdit = this.toggleSubmitEdit.bind(this);
  }

  toggleSubmitEdit() {
    this.setState((prevState) => ({
      isEdit: !prevState.isEdit,
    }));
  }

  render() {
    const { phoneNumber, email, isEdit } = this.state;
    return (
      <aside>
        <img src={profilePic} alt='llama profile picture' />
        <PhoneNumber isEdit={isEdit} />
        <Email isEdit={isEdit} />
        <EditButton 
          isEdit={isEdit}
          toggleSubmitEdit={this.toggleSubmitEdit}
        />
      </aside>
    );
  }
}

export default ContentAside;
