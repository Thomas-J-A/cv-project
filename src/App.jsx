import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;

// class App extends Component {
//     render() {
//         return (
//           <div>
//             <Header />
//             <Footer />
//           </div>
//         );
//     }
// }
