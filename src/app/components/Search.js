import React from 'react';
import Axios from 'axios';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      search: 'Search'
    };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value });

  }
  showSources() {
    let sources = `https://newsapi.org/v1/sources`;
    Axios.get(sources)
      .then((result) => {
        this.setState({
          sources: result.data.sources
        });
      });
  }

  componentDidMount() {
    this.showSources();

  }

  render() {
    let found = this.state.sources.filter(
      (sources) => {
        return sources.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

      });

    return (
      <div className="col-md-2" id="search">

        <input type="text" placeholder='Source Name' value={this.state.search} onChange={this.updateSearch.bind(this)} style={{
          color: 'grey'
        }} className="searchbox" />

        {found.map((sources) => {

          return (
            <div className="search" key={sources.id}>
              <a href={sources.url}> {sources.name} </a>

            </div>);

        }
        )}

      </div>
    );
  }
};
