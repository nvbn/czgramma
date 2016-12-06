import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Input from './Input';
import './Workplace.css';

class Workplace extends Component {
  constructor() {
    super();
    this.state = {showAnswers: false};
    this._showAnswers = this._showAnswers.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.title);
  }

  _shouldAddInput(word) {
    return (
      word.length > 4 &&
      word.search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/) === -1 &&
      Math.random() > 0.3
    );
  }

  _renderText() {
    // TODO: add proper check for endings
    return this.props.article.content.split(' ').map((word, n) => {
      if (!this._shouldAddInput(word)) {
        return (<span key={`word-${n}`}>{word}{" "}</span>);
      } else {
        return (
          <span key={`word-${n}`}>
            {word.slice(0, -3)}
            <Input key={`word-end-${n}`}
                   value={word.slice(-3)}
                   showAnswer={this.state.showAnswers}/>
            {" "}
          </span>
        );
      }
    });
  }

  _showAnswers() {
    this.setState({showAnswers: true});
  }

  render() {
    return (
      <Card>
        <CardHeader title={this.props.title}
                    textStyle={{fontWeight: 'bold'}}/>
        <CardText>
          <div className="text">{this._renderText()}</div>
        </CardText>
        <CardActions>
          <FlatButton label="Show answers" onClick={this._showAnswers}/>
          <FlatButton label="Next" onClick={this.props.goNext}/>
        </CardActions>
      </Card>
    );
  }
}

Workplace.propTypes = {
  title: React.PropTypes.string,
  article: React.PropTypes.object,
  fetchArticle: React.PropTypes.func,
  goNext: React.PropTypes.func,
};

export default Workplace;
