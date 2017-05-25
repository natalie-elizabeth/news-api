
import React from 'react';
import Axios from 'axios';

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
  },
  category: {
    business: 'business',
    entertainment: 'entertainment',
    gaming: 'gaming',
    general: ' general',
    music: 'music',
    politics: 'politics',
    science_and_nature: 'science-and-nature',
    sport: 'sport',
    technology: 'technology'
  }
};

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: {
        sources: [],
        currentsource: "aljazeera"
      },
      articles: [],
      currentFilter: {
        filterKey: 'language',
        filterValue: 'en',
      },
      filters: FILTERS
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  };
  showSources() {
    let sources = `https://newsapi.org/v1/sources`;
    Axios.get(sources)
      .then(({ data }) => {
        this.setState((prevState) => ({
          sources: data
        }));
      });
  }

  componentDidMount() {
    this.showSources();
  };

  handleFilterChange(event) {
    const { name, value } = event.target;

    this.setState((prevState) => {
      const newFilter = Object.assign({}, prevState.currentFilter, {
        [name]: value
      });
      return Object.assign({}, prevState, {
        currentFilter: newFilter
      });
    });
  }

  render() {
    const { filters, sources: { sources },
      currentFilter: { filterKey, filterValue } } = this.state;

    const sourcesToDisplay = sources.filter(source => {
      return source[filterKey] === filterValue;
    });

    return (
      <div className="container">
        <select
          className="form-control c-select mb-2"
          name="filterKey"
          style={{ width: '20%', alignItems: 'center', color: "red" }}
          onChange={this.handleFilterChange}
          defaultValue={filterKey}
        >
          {Object.keys(filters).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <select
          className="form-control c-select"
          name="filterValue"
          style={{ width: '20%', color: "red" }}
          onChange={this.handleFilterChange}
          defaultValue={filterValue}
        >
          {Object.keys(filters[filterKey]).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <div >
          <h2>Manage Sources</h2>
          {sourcesToDisplay.map((source => {
            return (
              <div key={source.id}>
                <div className="card-block">
                  <h4 className="card-title" style={{ fontStyle: "italic", fontFamily: "Roboto" }}>{source.name}</h4>
                </div>
              </div>
            );
          }))
          }
        </div>
      </div >
    );
  }
}
