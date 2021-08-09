import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div>
        <span>Education</span>
        <i className='fas fa-plus' onClick={this.handleClick} />
      </div>
    );
  }
}

export default Education;
