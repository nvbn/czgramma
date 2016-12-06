import React, { Component } from 'react';

class FetchRandom extends Component {
  componentDidMount() {
    this.props.fetchRandomArticle();
  }

  render() {
    return (<div><p>Fetching random article...</p></div>);
  }
}

FetchRandom.propTypes = {
  fetchRandomArticle: React.PropTypes.func,
};

export default FetchRandom;
