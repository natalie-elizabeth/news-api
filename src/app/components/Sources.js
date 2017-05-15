import React, { Component } from 'react';
import Axios from 'axios';
import { BrowserRouter as Link, Router, Route } from 'react-router-dom';

export default class Sources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: [],
        };
    }


    componentDidMount() {
        let EncodedURI = 'https://newsapi.org/v1/sources';
        Axios.get(EncodedURI)
            .then((result) => {
                console.log('getting result: ', result);
                this.setState({
                    sources: result.data.sources
                });
            })
            .catch(function (err) {
                err;
            })
    }
    render() {
        return (
            < div > <h1>Available sources</h1>
                {this.state.sources.map((sources) => (
                    <div key={sources.url}>
                        <a href={sources.url} >{sources.name}</a>
                    </div>
                ))
                };
            </div>
        )
    };
}
