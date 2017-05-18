import React from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Latest from './components/NavBar';
import Articles from './components/Articles';
require('./index.css');
import Nav from './components/Nav';
import Navigate from './components/move';
import Searching from './components/Search';
import Login from './components/Login';
import App from './components/App';
import Move from './components/move';


class Index extends React.Component {
  render() {
    return (

      <div>
        <Login />
        {/*<Searching />*/}
        <Header />
        {/*<Latest />*/}
        <Nav />
        {/*<Sources />*/}
        {/*<Articles />*/}
        {/*<App />*/}
        {/*<Move />*/}


      </div>
    );
  }
}

render(<Index />, document.getElementById('app'));
