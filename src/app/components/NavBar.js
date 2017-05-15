import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class SelectedTab extends React.Component {
    render() {
        var categories = ['Home', 'General', 'Business', 'Technology', 'Entertainment', 'Sports', 'Music'];
        return (
            <ul className="categories">
                {categories.map(function (category) {
                    return (
                        <li style={category === this.props.selectedCategory ? { color: '#d0021b' } : null}
                            onClick={this.props.onSelect.bind(null, category)}
                            key={category} >
                            {category}
                        </li>
                    )

                }, this)}
            </ul>

        )

    }
}

SelectedTab.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Latest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: 'Latest'
        };
        this.updateTab = this.updateTab.bind(this);
    }
    updateTab(category) {
        this.setState(function () {
            return {
                selectedCategory: category

            }
        })

    }
    render() {

        return (
            <div>
                <SelectedTab selectedCategory={this.state.selectedCategory} onSelect={this.updateTab} />
            </div>
        )

    }

}
module.exports = Latest;
