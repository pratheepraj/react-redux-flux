// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage.jsx';
import SingleEntryPage from './containers/SingleEntryPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import RegisterPage from './containers/RegisterPage.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './css/foundation.min.css';
import './App.css';

const App = () =>
  <div>
    <Router>
      <Provider store={createStore(reducers)}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={RegisterPage} />
        <Switch>
          <Route exact path="/posts/:id" component={SingleEntryPage} />
        </Switch>
      </Provider>
    </Router>
  </div>;

export default App;
