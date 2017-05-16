
import React from 'react';
import ReactDOM from 'react-dom';
import Sources from './Sources';
import Header from './header';
import Latest from './NavBar';
import Login from './Login';


import SideBar from 'react-side-bar';

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = 'SideBarExample';
        this.state = {
            barOpened: false,
            side: 'left',
            size: 256,

        };
    }

    toggleBar() {
        this.setState({ barOpened: !this.state.barOpened });
    }

    onOpen() {
        this.setState({ barOpened: true });
    }

    onClose() {
        this.setState({ barOpened: false });
    }



    render() {
        const { barOpened, side, size, topBarIncluded } = this.state;
        const navIconClassName = ['nav-icon'];

        if (barOpened) {
            navIconClassName.push('open');
        }
        const bar = (<div className='side'>
            <Login /> <Latest /></div>);
        const topBar = (<div className='topBar'>
            <div className='left'>
                <div
                    className={navIconClassName.join(' ')}
                    onClick={this.toggleBar.bind(this)}>
                    <span /><span /><span /><span />
                </div>
            </div>
            <div className='center'></div>
            <div className='right'></div>
        </div>);

        const sideBarProps = {
            bar: bar,
            opened: barOpened,
            onOpen: this.onOpen.bind(this),
            onClose: this.onClose.bind(this),
            side: side,
            size: size,

        };

        if (topBarIncluded) {
            sideBarProps.topBar = topBar;
        }

        return (
            <SideBar {...sideBarProps}>
                {!topBarIncluded && topBar}
                <div className='main'>

                </div>
            </SideBar>
        );
    }
}


