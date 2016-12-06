import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from '../reducers';
import FetchRandom from './FetchRandom';
import Workplace from './Workplace';
// import logo from './logo.svg';
// import './App.css';

const store = createStore(
  reducers,
  applyMiddleware(thunk, routerMiddleware(browserHistory)));

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={FetchRandom}/>
            <Route path="/article/:title" component={Workplace}/>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
