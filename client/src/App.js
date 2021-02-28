import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../src/components/Header';

import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Andrew Park',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }


  render () {
    return (
    <Router>
      <Header />

    </Router>
    );
  }
}

export default App;
