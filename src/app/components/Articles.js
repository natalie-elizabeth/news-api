import React, { Component } from 'react';
import Axios from 'axios'

export default class Sources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        let EncodedURI = `https://newsapi.org/v1/articles?source=source_id&sortBy=sort_by&apiKey=6f8522124f564510a240b1ff5bf1f975`
            .replace('source_id', this.props.params.source_id)
            .replace('sort_by', this.props.params.sort_by)
        Axios.get(EncodedURI)
            .then((result) => {
                this.setState({
                    articles: result.data.articles
                });
            })
            .catch(function (err) {
                err;
            })
    }
    render() {
        return (
            < div >
                <h1>Available sources</h1>
                {this.state.articles.map((articles) => (
                    <div key={articles.id}>
                        <b>{articles.author}</b><br /> {articles.description} <br />
                    </div>

                ))}
            </div >
        );
    };
}
