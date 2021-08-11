import React, { Component } from 'react';
import Description from './Description';
import Education from './Education';
import Experience from './Experience';

class ContentSection extends Component {
  render() {
    return (
      <section>
        <Description />
        <Education />
        <Experience />
      </section>
    );
  }
}

export default ContentSection;
