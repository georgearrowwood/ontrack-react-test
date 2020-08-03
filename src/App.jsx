import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Route, Switch } from "react-router-dom";

import './App.scss';

import configureStore from './store'
import Books from './components/books';

const history = createBrowserHistory();
const store = configureStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={Books} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
