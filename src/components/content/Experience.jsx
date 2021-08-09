import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div>
        <span>Experience</span>
        <i className='fas fa-plus' onClick={this.handleClick} />
      </div>
    );
  }
}

export default Experience;
