import React, { Component } from 'react';
import Axios from 'axios';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  render() {
    return (
      < div >
        {
          this.props.articles.map((article, index) => {
            return (<div key={index} className="article-list">
              <hr style={{ color: "black" }} />
              <img src={article.urlToImage} style={{ height: "200px", width: "200px" }} /> <br />
              <a href={article.url} style={{ fontSize: "16px" }}>{article.title}</a><br />
              <div className="description" style={{ fontStyle: "italic" }}>{article.description}</div>

              <hr />
            </div>);
          })
        }
      </div >
    );
  };
}
