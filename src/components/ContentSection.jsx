import React, { Component } from 'react';

class ContentSection extends Component {
  render() {
    return (
      <section>
        <div>
          <span>Description</span>
          <i className='fas fa-plus' />
        </div>
        <div>
          <span>Education</span>
          <i className='fas fa-plus' />
        </div>
        <div>
          <span>Experience</span>
          <i className='fas fa-plus' />
        </div>
      </section>
    );
  }
}

export default ContentSection;
