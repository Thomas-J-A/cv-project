import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import ContentSection from './ContentSection';
import ContentAside from './ContentAside';

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
