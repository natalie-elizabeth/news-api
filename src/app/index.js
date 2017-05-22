import React from 'react';
import { render } from 'react-dom';
import Header from './components/header';
require('./index.css');
import Nav from './components/Nav';
import Login from './components/Login';

class Index extends React.Component {
  render() {
    return (

      <div>
        <Login />
        <hr />
        <Header />
        <Nav />

      </div>
    );
  }
}

render(<Index />, document.getElementById('app'));
