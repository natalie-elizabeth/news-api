import React, { Component } from 'react';
import Axios from 'axios';

export default class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    let EncodedURI = `https://newsapi.org/v1/articles?source=wired-de&sortBy=latest&apiKey=6f8522124f564510a240b1ff5bf1f975`
    // .replace('source_id', this.props.params.source_id)
    // .replace('sort_by', this.props.params.sort_by)
    Axios.get(EncodedURI)
      .then((result) => {
        this.setState({
          articles: result.data.articles
        });
      })
      .catch(function (err) {
        err;
      });
  }
  render() {
    return (
      < div >
        <h1 className="latest">Latest </h1>
        {this.state.articles.map((articles) => (
          <div key={articles.id} className="article-list">
            <img src={articles.urlToImage} style={{ width: '20%' }} /> <br />

            <b>{articles.author}</b><br />
            <a href={articles.url} target="_blank">{articles.title}</a><br />
            {/*{articles.description} <br />*/}
          </div>

        ))}
      </div >
    );
  };
}
