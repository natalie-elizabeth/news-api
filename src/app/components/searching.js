import React from 'react';
import Axios from 'axios';
import SearchInput, { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name'];

const App = React.createClass({
  getInitialState() {
    return { searchTerm: '' };
  },

  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredEmails.map(email => {
          return (
            <div className="mail" key={email.id}>
              <div className="from">{email.user.name}</div>
              <div className="subject">{email.subject}</div>
            </div>
          );
        })}
      </div>
    );
  },

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
});

