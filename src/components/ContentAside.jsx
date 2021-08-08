import React, { Component } from 'react';
import EditButton from './EditButton';
import profilePic from '../images/profile-pic.jpg';

class ContentAside extends Component {
  render() {
    return (
      <aside>
        <img src={profilePic} alt='llama profile picture' />
        <p>Phone No:</p>
        <p>0123456789</p>
        <p>Email:</p>
        <p id='email'>example@example.com</p>
        <EditButton />
      </aside>
    );
  }
}

export default ContentAside;
