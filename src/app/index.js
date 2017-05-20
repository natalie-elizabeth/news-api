import React from 'react';
import { render } from 'react-dom';
import Header from './components/header';
require('./index.css');
import Nav from './components/Nav';

class Index extends React.Component {
  render() {
    return (

      <div>
        <Header />
        <Nav />

      </div>
    );
  }
}

render(<Index />, document.getElementById('app'));
