import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { red500, blue500, green500 } from 'material-ui/styles/colors';
import './Input.css';

class Input extends Component {
  constructor() {
    super();
    this.state = {userValue: ''};
    this._onChange = this._onChange.bind(this);
  }

  _getWidth() {
    return this.props.value.length * 12;
  }

  _onChange(e) {
    this.setState({userValue: e.target.value})
  }

  _getColor() {
    if (this.state.userValue === this.props.value) {
      return green500;
    } else if (this.state.userValue && this.state.userValue !== this.props.value) {
      return red500;
    } else if (this.props.showAnswer || !this.state.userValue) {
      return blue500;
    }
  }

  render() {
    return (<TextField style={{width: this._getWidth()}}
                       autoCapitalize="off"
                       autoCorrect="off"
                       id={`${this.props.id}-input`}
                       className='input-field'
                       onChange={this._onChange}
                       underlineStyle={{borderColor: this._getColor()}}
                       underlineFocusStyle={{borderColor: this._getColor()}}
                       value={this.props.showAnswer ? this.props.value : this.state.userValue}/>)
  }
}

Input.propTypes = {
  value: React.PropTypes.string,
  showAnswer: React.PropTypes.bool,
};

export default Input;
