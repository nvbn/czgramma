import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { ENDS } from '../constants';
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

  _getPossibleEnd(word) {
    if (word.length < 4) {
      return null;
    }

    for (const end of ENDS) {
      if (word.endsWith(end) && (word.length - end.length) > 3) {
        return end;
      }
    }

    return null;
  }

  _extractWord(part) {
    const matched = part.match(/([.,\/#!$%\^&\*;:{}=\-_`~()]*)([^.,\/#!$%\^&\*;:{}=\-_`~()]*)([.,\/#!$%\^&\*;:{}=\-_`~()]*)/);
    return matched.slice(1);
  }

  _renderText() {
    // TODO: add proper check for endings
    return this.props.article.content.split(' ').map((part, n) => {
      const [before, word, after] = this._extractWord(part);
      const possibleEnd = this._getPossibleEnd(word);

      if (!possibleEnd) {
        return (<span key={`word-${n}`}>{part}{" "}</span>);
      } else {
        return (
          <span key={`word-${n}`}>
            {before}
            {word.slice(0, -possibleEnd.length)}
            <Input id={`word-end-${n}`}
                   value={possibleEnd}
                   showAnswer={this.state.showAnswers}/>
            {after}
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
          <FlatButton label="Zobrazit správné odpovědi" onClick={this._showAnswers}/>
          <FlatButton label="Pokračovat" onClick={this.props.goNext}/>
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
