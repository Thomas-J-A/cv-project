import React, { Component } from 'react';
import ContentHeader from './content/ContentHeader';
import ContentSection from './content/ContentSection';
import ContentAside from './content/ContentAside';

class Main extends Component {
  render() {
    return (
      <main>
        <div className='content'>
          <ContentHeader />
          <ContentSection />
          <ContentAside />
        </div>
      </main>
    );
  }
}

export default Main;
