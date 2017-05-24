import React from 'react';
import Header from './header';
import NavBar from './NavBar';
import Articles from './Articles';
import SideBar from 'react-side-bar';
import Search from './Search';
import Axios from 'axios';
import Filters from './filter';

const FILTERS = {
  country: {
    au: 'au',
    de: 'de',
    us: 'us'
  },
  language: {
    en: 'en',
    de: 'de',
    fr: 'fr'
  }
};

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'SideBarExample';
    this.state = {
      barOpened: false,
      side: 'left',
      size: 256,
      sources: [],
      source_id: 'abc-news-au',
      articles: [],
      loading: true,
      currentFilter: {
        filterKey: 'language',
        filterValue: 'en',
      },
      filters: FILTERS
    };

    // this.onSelect = this.bind.onSelect(this);
    this.showArticles = this.showArticles.bind(this);
    this.renderSources = this.renderSources.bind(this);
    this.displayArticles = this.displayArticles.bind(this);
    // this.handleFilterChange = this.handleFilterChange.bind(this);
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

  componentDidMount() {
    this.displayArticles(this.state.source_id);
  }

  displayArticles(source_id, sort_by) {
    this.setState({
      loading: true
    });
    let EncodedURI = `https://newsapi.org/v1/articles?source=${source_id}&sortBy=${sort_by ? sort_by : ''}&apiKey=6f8522124f564510a240b1ff5bf1f975`;
    Axios.get(EncodedURI)
      .then((result) => {
        this.setState({
          loading: false,
          articles: result.data.articles
        });
      })
      .catch(function (err) {
        err;
      });
  }

  showArticles = (source_id) => {
    this.setState({ source_id })
    this.displayArticles(source_id)
  }

  renderSources = (sources) => {
    if (sources.length > 0) {
      return (
        <ul >
          {sources.map((source, index) => {
            return (<li key={index} className='sizing' onClick={() => this.showArticles(source.id)}>{source.name}</li>)
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
      <NavBar onInfoSelect={this.onSelect} /></div>);
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


    // const sources = this.state.sources.map((source, index) => {
    //     return (<li key={index}>{source.name}</li>);
    // });

    return (
      <div className="sideBar">
        <SideBar {...sideBarProps}>
          {!topBarIncluded && topBar}
          <div className='main'>
            <div className='title'>


            </div>
            <div className='explain col-lg-3' style={{ fontWeight: "bold" }}>
              {this.renderSources(this.state.sources)}
            </div>
            <div className='col-lg-6'>
              {this.state.loading ? "Loading Articles ....." : <Articles articles={this.state.articles} />}
            </div>
            <div className='col-lg-3'>

              <Filters />
            </div>
          </div>
        </SideBar>
      </div>
    );
  }
}


