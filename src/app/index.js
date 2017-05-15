import React from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Latest from './components/NavBar';
// require('./static/css/style.css');
import Sources from './components/Sources';
import Articles from './components/Articles';
require('./index.css');
import Nav from './components/Nav';



class Index extends React.Component {
    render() {
        return (

            <div>

                <Header />
                {/*<nav className="navbar navbar-inverse"></nav>*/}
                <Nav />


                {/*<Sources />*/}
                {/*<Articles />*/}

            </div>
        );
    }
}

render(<Index />, document.getElementById('app'))