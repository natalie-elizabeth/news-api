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
          this.props.articles.map((article, index)=>{
            return (<div key={index}>
              <hr />
              <img src={article.urlToImage} /> <br />
                <a href={article.url}>{article.title}</a>
              <hr />
              </div>);
          })
        }
      </div >
    );
  };
}
