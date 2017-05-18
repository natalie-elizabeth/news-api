import React from 'react';
import Sources from './Sources';
import Header from './header';
import Latest from './NavBar';
import Login from './Login';
import Articles from './Articles';
import Container from './containe'
import SideBar from 'react-side-bar';
import Move from './move';
import App from './App';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'SideBarExample';
    this.state = {
      barOpened: false,
      side: 'left',
      size: 256,
      sources: []
    };
    // this.onSelect = this.bind.onSelect(this);
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

  onSelect = (data) => {
    this.setState({ sources: data });
  }

  renderSources(sources) {
    if (sources.length > 0) {
      return (
        <ul >
          {sources.map(function (source, index) {
            return (<li key={index} className='col-md-3'><a href={source.url} target="blank">{source.name}</a><hr /></li>)
          })
          }
        </ul>
      )
    }
    return "Nothing to show at the moment";
  }

  render() {
    const { barOpened, side, size, topBarIncluded } = this.state;
    const navIconClassName = ['nav-icon'];

    if (barOpened) {
      navIconClassName.push('open');
    }
    const bar = (<div className='side'>
      <Latest onInfoSelect={this.onSelect} /></div>);
    const topBar = (<div className='topBar'>

      <div className='left'>
        <div
          className={navIconClassName.join(' ')}
          onClick={this.toggleBar.bind(this)}>
          <span /><span /><span /><span />
        </div>
      </div>
      <div className='center'> </div>
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


    // const sources = this.state.sources.map((source, index) => {
    //     return (<li key={index}>{source.name}</li>);
    // });

    return (
      <div>
        <SideBar {...sideBarProps}>
          {!topBarIncluded && topBar}
          <div className='main' style={{ marginLeft: 280 }}>
            <div className='title'>
              Here's the News
              <Move />

            </div>
            <div className='explain'>
              {this.renderSources(this.state.sources)}

            </div>
          </div>
        </SideBar>
      </div>
    );
  }
}


