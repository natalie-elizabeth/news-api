import React from 'react';
import Latest from './NavBar';

export default class Container extends React.Component {
    render() {
        return (
            <div className="containerData">
                {JSON.stringify(this.props.sources, null, 2)}
            </div>
        )
    }
}