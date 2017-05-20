import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import api, { fetchSources } from '../utils/api';



class SelectedTab extends React.Component {
  render() {
    var categories = ['General', 'Politics', 'Business', 'Technology', 'Entertainment', 'Sports', 'Music', 'Science', 'Gaming'];
    return (
      <ul className="categories">
        {categories.map(function (category) {
          return (
            // style part is for giving color to the selected Tab
            <li style={category === this.props.selectedCategory ? { color: '#d0021b' } : null}
              onClick={this.props.onSelect.bind(null, category)}
              onChange={this.props.onInfoSelect}
              key={category} >
              {category}
            </li>
          );

        }, this)}
      </ul>
    );
  }
}

SelectedTab.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onInfoSelect: PropTypes.func.isRequired,
};

class NavBar extends React.Component {
  // in order to add state to the categories
  // this.state makes Home the default
  constructor(props) {
    super();
    this.state = {
      selectedCategory: 'General',
      sources: null,
    };

    // bind the this key word to the updateTab function
    this.updateTab = this.updateTab.bind(this);
  }
  componentDidMount() {
    this.updateTab(this.state.selectedCategory);
  }



  updateTab(category) {
    this.setState(function () {
      return {
        selectedCategory: category,
        sources: null

      };
    });
    api.fetchSources(category)
      .then(function (sources) {
        this.props.onInfoSelect(sources);
        this.setState(function () {
          return {
            sources: sources
          };
        });

      }.bind(this));

  }
  //
  render() {
    return (
      <div>
        <SelectedTab selectedCategory={this.state.selectedCategory}
          onSelect={this.updateTab} />
      </div>
    );
  }
}
module.exports = NavBar;
