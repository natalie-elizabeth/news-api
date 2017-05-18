import React from 'react';
import { Router, Route, HashRouter, Link } from 'react-router-dom';
import Home from './Home';
import Articles from './Articles';
import Nav from './Nav';
import Move from './move';

export default class App extends React.Component {

  render() {

    return (
      <HashRouter>
        <div>
          <Move />
          <Route exact path="/" component={Home} />
          <Route path="/nav" component={Nav} />
          <Route render={function () { return <p>Not Found</p> }} />
        </div>
      </HashRouter >
    );
  }
}

