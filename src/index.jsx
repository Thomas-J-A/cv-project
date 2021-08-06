import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Subscribe to HMR
if (module.hot) {
  module.hot.accept();
}
